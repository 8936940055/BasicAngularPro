import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';


const routes: Routes =[
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
  {path:'heroes',component: HeroesComponent},
  {path:'detail/:id',component: HeroDetailsComponent},
  {path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
 exports: [RouterModule],
  
})
export class AppRoutingModule { }
