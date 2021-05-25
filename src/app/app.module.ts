import { NewsService } from './news/news.service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableComponent } from './table/table.component';
import { ResultsComponent } from './results/results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import {HttpClientModule} from "@angular/common/http";
import { MatchGenerateComponent } from './match-generate/match-generate.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NewsContainerComponent } from './news-container/news-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TableComponent,
    ResultsComponent,
    MatchGenerateComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    NewsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
