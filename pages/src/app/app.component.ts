import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
        title: "At the beach",
        url: "https://images.unsplash.com/photo-1518937010030-806d92fb47f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJvcGljYWwlMjBwYXJhZGlzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "At the forest",
        url: "https://unsplash.com/photos/2pgJ08ieQA4"
      },
      {
        title: "At the coffee shop",
        url: ""
      },
      {
        title: "At the city",
        url: "https://unsplash.com/photos/n7DY58YFg9E"
      },
      {
        title: "At the paradise",
        url: "https://www.google.com/search?q=unsplash+nature+images&sxsrf=ALeKk03MgXEPWG_KoiAFAY05ZcrYV7eaOQ:1621149931174&tbm=isch&source=iu&ictx=1&fir=xsTyrXtFhk_IYM%252CjcfJekXmSUdJHM%252C_&vet=1&usg=AI4_-kRzflymjATnfxrxlIHZPbMmrUCYtA&sa=X&ved=2ahUKEwitrJmO1s3wAhXL73MBHUhFBl4Q9QF6BAgOEAE#imgrc=xsTyrXtFhk_IYM"
      },
      {
        title: "At the beach",
        url: "https://images.unsplash.com/photo-1518937010030-806d92fb47f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJvcGljYWwlMjBwYXJhZGlzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "At the forest",
        url: "https://unsplash.com/photos/2pgJ08ieQA4"
      },
      {
        title: "At the coffee shop",
        url: ""
      },
      {
        title: "At the city",
        url: "https://unsplash.com/photos/n7DY58YFg9E"
      },
      {
        title: "At the paradise",
        url: "https://www.google.com/search?q=unsplash+nature+images&sxsrf=ALeKk03MgXEPWG_KoiAFAY05ZcrYV7eaOQ:1621149931174&tbm=isch&source=iu&ictx=1&fir=xsTyrXtFhk_IYM%252CjcfJekXmSUdJHM%252C_&vet=1&usg=AI4_-kRzflymjATnfxrxlIHZPbMmrUCYtA&sa=X&ved=2ahUKEwitrJmO1s3wAhXL73MBHUhFBl4Q9QF6BAgOEAE#imgrc=xsTyrXtFhk_IYM"
      },
    {
      title: "At the beach",
      url: "https://images.unsplash.com/photo-1518937010030-806d92fb47f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJvcGljYWwlMjBwYXJhZGlzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At the forest",
      url: "https://unsplash.com/photos/2pgJ08ieQA4"
    },
    {
      title: "At the coffee shop",
      url: ""
    },
    {
      title: "At the city",
      url: "https://unsplash.com/photos/n7DY58YFg9E"
    },
    {
      title: "At the paradise",
      url: "https://www.google.com/search?q=unsplash+nature+images&sxsrf=ALeKk03MgXEPWG_KoiAFAY05ZcrYV7eaOQ:1621149931174&tbm=isch&source=iu&ictx=1&fir=xsTyrXtFhk_IYM%252CjcfJekXmSUdJHM%252C_&vet=1&usg=AI4_-kRzflymjATnfxrxlIHZPbMmrUCYtA&sa=X&ved=2ahUKEwitrJmO1s3wAhXL73MBHUhFBl4Q9QF6BAgOEAE#imgrc=xsTyrXtFhk_IYM"
    },
  ]


  currentWindowCheck(value:number){
    return Math.abs(this.currentPage-value)<5;
  }
}
