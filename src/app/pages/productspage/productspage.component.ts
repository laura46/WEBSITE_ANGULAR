import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import * as data from 'src/assets/products.json';

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.scss']
})
export class ProductspageComponent implements OnInit {

  public products;
  //public producten = data.producten;

  public lang;
  constructor(public languageService: LanguageService, meta: Meta, title: Title) {
    title.setTitle('This is the products page');
    meta.addTag({ name: 'description', content: 'This is the meta description for the product page' });
  }

  ngOnInit() {
    this.lang = this.languageService.getLanguage();
    if (this.lang == 'nl') {
      this.products = data.producten;
    } else {
      this.products = data.products;
    }
  }

  getTitle(){
    if(this.lang == 'nl') {
      return 'Dit zijn de producten die werken voor mijn haar.';
    } else {
      return 'These are some of the products that work for my hair.';
    }
  }

  getIntro() {
    if(this.lang == 'nl') {
      return `<p >Maar alleen omdat het voor mij werkt betekent niet dat het gegarandeerd ook voor jou werkt.
  </p>
  <p >Experimenteer met je haar en probeer erachter te komen wat voor verzorging je nodig hebt door verschillende
  producten, methodes en aanpakken uit te proberen.
  </p>`;
    } else {
      return `<p >But just because it works for me does not mean it's a garantuee it will work for
      you too. 
  </p>
  <p >Experiment with your hair and figure out what it needs by trying different
      methods, products and approaches.
  </p>`;
    }
  }

  goto(link){
    window.open(link);
  }
}
