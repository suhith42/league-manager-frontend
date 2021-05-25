import { NewsItem } from './../models/news.model';
import { NewsService } from './news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  

  newsData: Array<any> = [{ title: '', description: '', url: '', urlToImage: '', source:{name:''}}];
  
  constructor(private service: NewsService) {
    this.getNewsData();
   }

  ngOnInit(): void {
  }

  async getNewsData(){  
    this.service.getData().subscribe(
      response => {
        this.newsData = response.articles                
      }
    )
  }


}
