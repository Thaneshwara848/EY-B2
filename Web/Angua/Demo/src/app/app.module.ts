import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { GalaryComponent } from './galary/galary.component';
import { DirectivComponent } from './directiv/directiv.component';
import { MydirectiveComponent } from './mydirective/mydirective.component';
import { BindingComponent } from './binding/binding.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubePipe } from './cube.pipe';
import { FormsComponent } from './forms/forms.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactivedrivenfomrComponent } from './reactivedrivenfomr/reactivedrivenfomr.component';
import { ServdemoComponent } from './servdemo/servdemo.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { ProductComponent } from './product/product.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DepartmentComponent,
    GalaryComponent,
    DirectivComponent,
    MydirectiveComponent,
    BindingComponent,
    PipedemoComponent,
    SqrPipe,
    CubePipe,
    FormsComponent,
    FormsdemoComponent,
    ReactivedrivenfomrComponent,
    ServdemoComponent,
    A1Component,
    A2Component,
    A3Component,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
