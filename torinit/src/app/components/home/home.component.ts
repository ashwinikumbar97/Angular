import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  userid:number;
  user;
  username;
  website;
  company;
  subscription:Subscription;
  constructor(private activeRoute:ActivatedRoute , 
              private service:LoginService,
              private route:Router,@Inject(DOCUMENT) 
              private document: Document) { }

  ngOnInit(): void {
    this.userid= parseInt(this.activeRoute.snapshot.paramMap.get('userid'));
    this.service.getUser(this.userid).subscribe((user:User[])=>{
      this.user=user;
      this.userid=this.user.id;
      this.username=this.user.name;
      this.company=this.user.company.name;
      this.website=this.user.website;
    });
    
  }

  onClick(){
    this.subscription=this.service.logout().subscribe(()=>{});
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
