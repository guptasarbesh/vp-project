import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  public glassList:any = [
    {
      name:'VINCENT CHASSE POLARISED',
      image: "01.jpg"
    },
    {
      name:'VINCENT CHASE',
      image: '02.jpg'
    
    },
    {
      name:'RAYBAN',
      image: '03.jpeg'
     
    },
    {
      name:'JOHN JACOBS',
      image: '04.jpg'
    },
    {
      name:'CARERA',
     image:'05.jpg'

    },
    {
      name:'VOGUE',
      image: '06.jpg'
      
    }
    

  ];
  constructor() { }

  ngOnInit() {
    // this.glassList.push({name:, imge: '', price: '$200'})
  }

  getImage(image){
    return '\\assets\\images\\subheader2\\' + image;
  }
}
