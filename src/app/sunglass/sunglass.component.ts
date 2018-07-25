import { Component, OnInit } from '@angular/core';
import { Product } from '../productSchema';
import { GlassesService } from '../services/glasses.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-sunglass',
  templateUrl: './sunglass.component.html',
  styleUrls: ['./sunglass.component.css']
})
export class SunglassComponent implements OnInit {
 product:Product[];
  // public glassList:any = [
  //   {
  //     name:'VINCENT CHASSE POLARISED',
  //     image: "01.jpg",
  //     id: '11101',
  //     price: 120
  //   },
  //   {
  //     name:'VINCENT CHASE SUNSETTERS',
  //     image: '03.jpg',
  //     id: '11102',
  //     price: 120
  //   },
  //   {
  //     name:'MASK',
  //     image: '04.jpg',
  //     id: '11103',
  //     price: 220
  //   },
  //   {
  //     name:'JOHN JACOBS',
  //     image: '05.jpg',
  //     id: '11104',
  //     price: 180
  //   },
  //   {
  //     name:'VINCENT CHASE POLARIZED',
  //     image: '06.jpg',
  //     id: '11105',
  //     price: 320
  //   },
  //   {
  //     name:'VOGUE',
  //     image: '07.jpg',
  //     id: '11106',
  //     price: 520
  //   },
  //   {
  //     name:'VOGUE VO5222S',
  //     image: '08.jpg',
  //     id: '11107',
  //     price: 530
  //   },
  //   {
  //     name:'RAY-BAN',
  //     image: '100.jpg',
  //     id: '11108',
  //     price: 100
  //   }

  // ];

  constructor(private glassService:GlassesService,private router:Router) { }
  
  ngOnInit() {
    // this.glassList.push({name:, imge: '', price: '$200'})
    this.glassService.getProducts().subscribe((data)=>{
      this.product=data;
      console.log(this.product);
    })
  }
goToPro(id)
{
  console.log(id);
  this.router.navigate(['/Men','Sunglass','Product',id]);
}
  getImage(image){
    return '\\assets\\images\\101\\' + image;
  }
}
