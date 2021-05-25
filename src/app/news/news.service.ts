import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http?: HttpClient) { }

  getData(): Observable<any>{
      return this.http.get('https://newsapi.org/v2/everything?q=premier+league&from=2021-05-23&sortBy=popularity&apiKey=9467c30b51e442d4a2ad8d732153d911');
       
  }
}
