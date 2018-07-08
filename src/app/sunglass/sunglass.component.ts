import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunglass',
  templateUrl: './sunglass.component.html',
  styleUrls: ['./sunglass.component.css']
})
export class SunglassComponent implements OnInit {

  public glassList:any = [
    {
      name:'VINCENT CHASSE POLARISED',
      image: "01.jpg",
      id: '11101',
      price: 120
    },
    {
      name:'VINCENT CHASSE POLARISED',
      image: '01.jpg',
      id: '11101',
      price: 120
    },
    {
      name:'VINCENT CHASSE POLARISED',
      image: '01.jpg',
      id: '11101',
      price: 120
    },
    {
      name:'VINCENT CHASSE POLARISED',
      image: '01.jpg',
      id: '11101',
      price: 120
    },
    {
      name:'VINCENT CHASSE POLARISED',
      image: '01.jpg',
      id: '11101',
      price: 120
    }
  ];
  constructor() { }

  ngOnInit() {
    // this.glassList.push({name:, imge: '', price: '$200'})
  }

  getImage(image){
    return '\\assets\\images\\100\\' + image;
  }
}
