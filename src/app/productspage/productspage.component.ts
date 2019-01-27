import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.scss']
})
export class ProductspageComponent implements OnInit {

  public products = [
    {'title': 'Aloe Vera', 'img': '../../assets/img/rsz_ember-ivory-431242-unsplash.jpg', 
    'cred': 'Photo by Ember + Ivory on Unsplash', 'desc': 'Find out more on the uses of Aloe Vera on the wikihow page. They advise to include castile soap in the recipe, which I would not use in a hairproduct because it dries out my hair.'
    ,'wiki': 'https://www.wikihow.com/Use-Aloe-Vera#Using_Aloe_for_Hair_Care_sub' },
    {'title': 'Coconut', 'img': '../../assets/img/rsz_gerson-repreza-436184-unsplash.jpg', 
    'cred': 'Photo by Gerson Repreza on Unsplash', 'desc': 'Coconut has many uses, this article mainly focuses on coconut oil, there are also a lot of recipes including coconut milk. Try what works best for your hair.',
    'wiki': 'https://www.wikihow.com/Use-Coconut-Oil-on-Your-Hair-and-Skin'},
    {'title': 'Hibiscus', 'img': '../../assets/img/rsz_jeffery-wong-539530-unsplash.jpg', 
    'cred': 'Photo by Jeffery Wong on Unsplash', 'desc': 'This wikihow makes a shampoo using hibiscus, I use hibiscus in my leave-in conditioner. It works really well for taming my frizz.'
    ,'wiki': 'https://www.wikihow.com/Make-Shampoo-With-Hibiscus-Flowers-and-Leaves'},
    {'title': 'Olive', 'img': '../../assets/img/rsz_roberta-sorge-142255-unsplash.jpg', 
    'cred': 'Photo by Roberta Sorge on Unsplash', 'desc': 'Overnight olive oil masks are the best! Mix the oil with any other blend of oils you like to deeply moisturize the hair.'
    ,'wiki': 'https://www.wikihow.com/Make-an-Olive-Oil-Hair-Mask'},
    
  ];

  public producten = [
    {'title': 'Aloë Vera', 'img': '../../assets/img/rsz_ember-ivory-431242-unsplash.jpg', 
    'cred': 'Foto door Ember + Ivory op Unsplash', 'desc': 'Bekijk de wikihow pagina om een indicatie te krijgen van hoe je aloë vera kan gebruiken. Ze adviseren om castille zeep in het haarproduct te vermengen, dat zou ik dan persoonlijk weer vermijden omdat het mijn haar uitdroogt.'
    ,'wiki': 'https://www.wikihow.com/Use-Aloe-Vera#Using_Aloe_for_Hair_Care_sub' },
    {'title': 'Kokosnoot', 'img': '../../assets/img/rsz_gerson-repreza-436184-unsplash.jpg', 
    'cred': 'Foto door Gerson Repreza op Unsplash', 'desc': 'Kokosnoot kan op vele manieren gebruikt worden, dit artikel gaat voornamelijk over kokosolie, er zijn ook veel recepten met kokosmelk. Probeer uit wat het beste werkt voor jou haar.',
    'wiki': 'https://www.wikihow.com/Use-Coconut-Oil-on-Your-Hair-and-Skin'},
    {'title': 'Hibiscus', 'img': '../../assets/img/rsz_jeffery-wong-539530-unsplash.jpg', 
    'cred': 'Foto door Jeffery Wong op Unsplash', 'desc': 'Deze wikihow maakt een shampoo met hibiscus, ik gebruik hibiscus in mijn leave-in conditioner. Het gaat bij mijn haar pluis erg goed tegen.'
    ,'wiki': 'https://www.wikihow.com/Make-Shampoo-With-Hibiscus-Flowers-and-Leaves'},
    {'title': 'Olijf', 'img': '../../assets/img/rsz_roberta-sorge-142255-unsplash.jpg', 
    'cred': 'Foto door Roberta Sorge op Unsplash', 'desc': 'Slapen met een olijfolie masker in werkt heel goed voor mij! Ik mix de olie met andere olieën om mijn haar diep te hydrateren.'
    ,'wiki': 'https://www.wikihow.com/Make-an-Olive-Oil-Hair-Mask'},
    
  ];
  public lang;
  constructor(public languageService: LanguageService) { }

  ngOnInit() {
    this.lang = this.languageService.getLanguage();
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
