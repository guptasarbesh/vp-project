import { Component, OnInit } from '@angular/core';
import { GlassesService } from '../services/glasses.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Product } from '../productSchema';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id:String;
  product:Product;
  constructor(private glassService:GlassesService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
    this.glassService.getProduct(this.id).subscribe((data)=>{
        this.product=data;
    })
  }

  getImage(image){
    return '\\assets\\images\\product1\\' + image;
  }

  

}
