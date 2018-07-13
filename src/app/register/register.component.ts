import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;

  constructor(private validateService: ValidateService ) { }

  ngOnInit() {

    console.log(123);
  }
  
  onSubmit()
  {
    const user={
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
    }

    //REquired Fields

    if(!this.validateService.validateRegister(user))
    {
      console.log('Please fill in all fields');
      return false;
    }

    //Validate Email

    if(!this.validateService.validateEmail(user.email))
    {
      console.log('Please use a valid email');
      return false;
    }

  }
}
