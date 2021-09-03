import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album } from 'src/app/models/albums';
import { Photo } from 'src/app/models/photos';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  userid:number;
  albums:Album[];
  filteredAlbums:Album[];
  subscriptionPhoto:Subscription;
  subscriptionAlbum:Subscription;
  subscriptionByAlbumId:Subscription;
  photos:Photo[];
  count:number;
  photosCount:number[]=[];
  albumLength:number;
  key='id';
  reverse:boolean=false;

  constructor(private activeRoute:ActivatedRoute , private service:LoginService,private route:Router) { }

  ngOnInit(): void {
    
    //userid of parent route
    this.userid= parseInt(this.activeRoute.snapshot.parent.paramMap.get('userid'));

    //fetching all album json data 
   this.subscriptionAlbum= this.service.getalbums().subscribe((albums:Album[])=>{
      this.albums=albums.filter(p=>p.userId=1);
      this.albumLength= this.albums.length; //Object.keys(this.albums).length;

     //getting count of photos by albumId
      for(let i=1;i<=this.albums.length;i++){
        this.subscriptionByAlbumId= this.service.getPhotosByAlbumId(i).subscribe((p:Photo[])=>{
           this.photos=p;  
           this.photosCount.push(Object.keys(this.photos).length);
         })  
       }
       

    })      
  }

  //search functionality
  filter(searchQuery:string){
    this.filteredAlbums=searchQuery ? 
    this.albums.filter(p=>p.title.toLocaleLowerCase().includes(searchQuery)) : 
    this.albums; 
}

// sorting table column
sort(key){
 this.key=key;
 this.reverse=!this.reverse;	
}

//displaying photos on click of edit 
onclick(value){
  this.subscriptionPhoto=this.service.getphotos().subscribe((photos:Photo[])=>{
    this.photos=photos.filter(p=>p.albumId==value);

  })}


  ngOnDestroy(): void {
    // this.subscriptionPhoto.unsubscribe();
    // this.subscriptionAlbum.unsubscribe();
    // this.subscriptionByAlbumId.unsubscribe();
  }

}
