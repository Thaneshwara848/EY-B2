import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DirectivComponent } from './directiv/directiv.component';
import { MydirectiveComponent } from './mydirective/mydirective.component';
import { BindingComponent } from './binding/binding.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FormsComponent } from './forms/forms.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'galary',component:GalaryComponent
  },
  {
    path:'forms',component:FormsdemoComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'bind',component:BindingComponent
  },
  {
    path:'pipe',component:PipedemoComponent
  },
  {
    path:'dir',component:MydirectiveComponent
  },
  {
    path:'**',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
