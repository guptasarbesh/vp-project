import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  user:{remember:false,email:String,password:String};
  constructor() { }

  ngOnInit() {
    this.user={
      remember:false,
      email:'',
      password:''
    }
  }

  onSubmit()
  {
    console.log("User:",this.user);
  }

}
