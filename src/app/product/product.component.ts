import { Component, OnInit } from '@angular/core';
import { GlassesService } from '../services/glasses.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../productSchema';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id:String;
  product:Product;
  user:{
    interestedIn:[String],
    _id:String,
    name:String,
    email:String
  }
  constructor(private glassService:GlassesService,private route:ActivatedRoute,private authService:AuthService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
    this.glassService.getProduct(this.id).subscribe((data)=>{
        this.product=data;
    })
    this.user=JSON.parse(localStorage.getItem('user'));
  }
  addCart()
  {
console.log("Add Cart");
if (this.authService.loggedIn()) {
  this.user=JSON.parse(localStorage.getItem('user'));
  this.authService.addInterseted(this.user._id, this.product._id).subscribe((data) => {
      if(data)
      {
        this.authService.haveUser(this.user.email).subscribe((data) => {
          if (data) {
            this.user.interestedIn = data.interestedIn;
            localStorage.setItem('user', JSON.stringify(this.user));
          }
        })
        alert("Product Added to cart Successfully.You can view the product in you cart.")
      }
  });
  }
}
  getImage(image){
    return '\\assets\\images\\product1\\' + image;
  }
}
