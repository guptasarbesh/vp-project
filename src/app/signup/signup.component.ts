import { Component, OnInit } from '@angular/core';
import { GlassesService } from '../services/glasses.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _glassService: GlassesService) { }

  ngOnInit() {
  }

  onSubmit(){
    // this._glassService.signupUser({}).subscribe(data=>{
    //   console.log(data);
    // }, err=> console.log(err))

    console.log(123);
  }
}
