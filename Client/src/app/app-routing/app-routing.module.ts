import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from '../new/new.component'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EditComponent } from '../edit/edit.component';


const routes:Routes = [
  { path: 'new',component:NewComponent},
  { path: 'home',component:HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'edit/:id',component:EditComponent},
  { path: '**', redirectTo: '/home'}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
