import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.scss']
})
export class ProductspageComponent implements OnInit {

  public products = [
    {'title': 'Aloë Vera', 'img': '../../assets/img/rsz_ember-ivory-431242-unsplash.jpg'},
    {'title': 'Coconut', 'img': '../../assets/img/rsz_gerson-repreza-436184-unsplash.jpg'},
    {'title': 'Hibiscus', 'img': '../../assets/img/rsz_jeffery-wong-539530-unsplash.jpg'},
    {'title': 'Olive', 'img': '../../assets/img/rsz_roberta-sorge-142255-unsplash.jpg'},
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
