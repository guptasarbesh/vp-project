import { Component, OnInit } from '@angular/core';
import { Product } from '../productSchema';
import { AuthService } from '../services/auth.service';
import { GlassesService } from '../services/glasses.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:Product[];
  user:{
    interestedIn:[String],
    _id:String,
    name:String,
    email:String
  }
  constructor(private authService:AuthService,private productService:GlassesService) { }

  ngOnInit() {
    if(this.authService.loggedIn())
    {
      this.product=[];
      this.user=JSON.parse(localStorage.getItem("user"));
      for(let x of this.user.interestedIn)
      {
        this.productService.getItem(x).subscribe((data)=>{
          console.log(data);
          this.product.push(data);
        })
      }
    }
  }

}
