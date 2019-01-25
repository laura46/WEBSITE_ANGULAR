import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.scss']
})
export class ProductspageComponent implements OnInit {

  public products = [
    {'title': 'Aloë Vera', 'img': '../../assets/img/rsz_ember-ivory-431242-unsplash.jpg', 
    'cred': 'Photo by Ember + Ivory on Unsplash', 'desc': 'Find out more on the uses of Aloë Vera on the wikihow page. They advised to make a hairproduct with castile soap which I would not use in a hairproduct because it dries out my hair.'
    ,'wiki': 'https://www.wikihow.com/Use-Aloe-Vera#Using_Aloe_for_Hair_Care_sub' },
    {'title': 'Coconut', 'img': '../../assets/img/rsz_gerson-repreza-436184-unsplash.jpg', 
    'cred': 'Photo by Gerson Repreza on Unsplash', 'desc': 'Coconut has many uses, this article mainly focuses on coconut oil',
    'wiki': 'https://www.wikihow.com/Use-Coconut-Oil-on-Your-Hair-and-Skin'},
    {'title': 'Hibiscus', 'img': '../../assets/img/rsz_jeffery-wong-539530-unsplash.jpg', 
    'cred': 'Photo by Jeffery Wong on Unsplash', 'desc': ''
    ,'wiki': 'https://www.wikihow.com/Make-Shampoo-With-Hibiscus-Flowers-and-Leaves'},
    {'title': 'Olive', 'img': '../../assets/img/rsz_roberta-sorge-142255-unsplash.jpg', 
    'cred': 'Photo by Roberta Sorge on Unsplash', 'desc': ''
    ,'wiki': 'https://www.wikihow.com/Make-an-Olive-Oil-Hair-Mask'},
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
