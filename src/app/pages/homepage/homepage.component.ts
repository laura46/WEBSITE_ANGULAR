import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../main/app.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'dl-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public lang;

  constructor(public app: AppComponent, public languageService: LanguageService) { }

  ngOnInit() {
    this.lang = this.languageService.getLanguage();
  }

  checkSize() {
    if(this.app.screenSize == 'normal') {
      return 'heading';
    } else {
      return 'heading-small';
    }
  }

  checkWindow(){
    if(this.app.screenSize == 'normal') {
      return 'container';
    } else {
      return 'container mobile'; 
    }
  }

  getTitle() {
    if(this.lang == 'nl'){
      return 'Voor krullen door krullen'
    } else {
      return 'By curls for curls';
    }
  }

  getIntro() {
    if(this.lang == 'nl') {
      return "<p>Uitvinden wat voor verzorging je haar nodig heeft kan soms lastig zijn, vooral als je krullen hebt.</p><p>Maar het is niet onmogelijk, door verschillende natuurlijke producten en methodes uit te proberen vind je vast iets wat voor jou wel werkt.</p><p>Dit zijn een paar van de mensen en producten die mij verder helpen.</p>";
    } else {
      return "<p>Finding out what works for your hair can be tricky, especially if you have curls.</p><p>However it is not impossible, by trying out different natural products and methods you will most likely find something that works for you.</p><p>These are some of the people and products that work for me.</p>";
    }
  }

}
