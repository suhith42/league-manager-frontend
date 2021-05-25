import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  homeButton: string;
  newsButton: string;
  statsButton: string;

  constructor(private router: Router) {
    // console.log(router.url == '/stats');
    

      

   }

  ngOnInit(): void {
    if(this.router.url == '/stats'){
      this.statsButton = 'red'
      console.log('stats');
      
    }else if(this.router.url=='/news'){
      this.newsButton='red'
      console.log('home');
      
    }else
      this.homeButton='red'
      console.log('home');
  }

}
