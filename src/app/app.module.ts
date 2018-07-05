import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from "@angular/router";
import 'hammerjs';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { MenComponent } from './men/men.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { LensesComponent } from './lenses/lenses.component';
import { SunglassComponent } from './sunglass/sunglass.component';
import { EyeglassComponent } from './eyeglass/eyeglass.component';


const appRoutes: Routes=[
  { path: '',component:HomeComponent },
{ path: 'Home',component:HomeComponent },
{ path: 'Men',component:MenComponent },
{ path: 'Women',component:WomenComponent },
{ path: 'Kids',component:KidsComponent },
{ path: 'Signin',component:SigninComponent },
{ path: 'Signup',component:SignupComponent },
{ path: 'Lenses',component:LensesComponent },
{ path: 'Sunglass',component:SunglassComponent },
{ path: 'Eyeglass',component: EyeglassComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    MenComponent,
    HomeComponent,
    WomenComponent,
    KidsComponent,
    SubHeaderComponent,
    LensesComponent,
    SunglassComponent,
    EyeglassComponent,
    
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
    FormsModule,
    RouterModule.forRoot(appRoutes)
    // AppRoutingModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
