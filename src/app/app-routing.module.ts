import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';



const routes: Routes = [
    // {path: 'home', component: HomeComponent },
    {path: '', component:HomeComponent},
    {path: 'stats', component: LayoutComponent},
    {path: 'news', component: NewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


