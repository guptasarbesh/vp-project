import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Routes,RouterModule } from "@angular/router";
import 'hammerjs';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes=[
  { path: '',component:SignupComponent },
{ path: 'Signin',component:SigninComponent },
{ path: 'Signup',component:SignupComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
    // AppRoutingModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
