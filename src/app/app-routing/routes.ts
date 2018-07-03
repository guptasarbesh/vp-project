import { Routes } from '@angular/router';

import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';


export const routes: Routes = [
  { path: 'Signin',  component: SigninComponent },
  { path: 'Signup',     component: SignupComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }
];