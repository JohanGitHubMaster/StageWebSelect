import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webSelect-app';
  currentRoute: string = "";
  constructor(private router: Router) {
    // console.log(router.url);
    // router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     console.log("hello")
    //     console.log(event.url);
    //     this.currentRoute = event.url;
    //   }
    // });


  }
}
