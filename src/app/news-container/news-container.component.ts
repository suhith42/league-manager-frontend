import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {

  @Input() imgLink:string;
  @Input() title:string;
  @Input() description:string;
  @Input() imageSrc:string;

  constructor() {
    // this.title="Aston Villa vs Chelsea live stream: How to watch Premier League football"
    // this.imageSrc="https://static01.nyt.com/images/2021/05/23/sports/23onsoccer2/23onsoccer2-facebookJumbo.jpg"
   }

  ngOnInit(): void {
  }

}
