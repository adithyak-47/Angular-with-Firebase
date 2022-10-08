import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { LoginComponent } from './login/login.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [{path:'add',component:AdddetailsComponent},{path:'',component:LoginComponent},{path:'view',component:ViewdetailsComponent},{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
