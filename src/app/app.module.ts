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
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';

import { FooterComponent } from './footer/footer.component';
import { MenComponent } from './men/men.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SunglassComponent } from './sunglass/sunglass.component';
import { EyeglassComponent } from './eyeglass/eyeglass.component';
import { ProductComponent } from './product/product.component';

import { GlassesService } from './services/glasses.service';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule } from '@angular/http';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from './guards/auth.guards';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes=[
  { path: '',component:HomeComponent },
{ path: 'Home',component:HomeComponent },
{ path: 'Men',component:MenComponent },
{ path: 'Women',component:WomenComponent },
{ path: 'Kids',component:KidsComponent },
{ path: 'cart',component:CartComponent },
{ path: 'Signin',component:SigninComponent },
{ path: 'Dashboard',component:DashboardComponent, canActivate:[AuthGuard] },
{ path: 'Profile',component:ProfileComponent,canActivate:[AuthGuard] },

{ path: 'Register',component:RegisterComponent },
{ path: 'Men/Sunglass',component:SunglassComponent },
{ path: 'Men/Sunglass/Product/:id',component:ProductComponent },
{ path: 'Men/Eyeglass',component: EyeglassComponent }

];


@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    SigninComponent,
    FooterComponent,
    MenComponent,
    HomeComponent,
    WomenComponent,
    KidsComponent,
    SubHeaderComponent,

    SunglassComponent,
    EyeglassComponent,
    ProductComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    CartComponent
  
    
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
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    HttpModule

    // AppRoutingModule
 

  ],
  providers: [ValidateService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
