import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/harmful-ingredients.json';
import { AppComponent } from '../../main/app.component';
import { LanguageService } from '../../services/language.service.js';


@Component({
  selector: 'app-ingredientpage',
  templateUrl: './ingredientpage.component.html',
  styleUrls: ['./ingredientpage.component.scss']
})
export class IngredientpageComponent implements OnInit {

  public ingredients = data.ingredients;
  public ingredienten = data.ingredienten;
  public searchResults = [];
  public searchBarEmpty = true;
  public resultsEmpty = true;
  public cleanInput: string;
  public lang;

  constructor(public app: AppComponent, public languageService: LanguageService) { }

  ngOnInit() {
    this.lang = this.languageService.getLanguage();
  }

  searchIngredients(input: string) {

    this.searchBarEmpty = false;

    this.cleanInput = input.toLowerCase().replace(/\s/g, "");

    let results;

    if(this.lang == 'nl') {
      results = this.ingredienten.filter(i => i.toLowerCase().replace(/\s/g, "").indexOf(this.cleanInput) > -1);
    } else {
      results = this.ingredients.filter(i => i.toLowerCase().replace(/\s/g, "").indexOf(this.cleanInput) > -1);
    }

    let shortList = results.slice(0, 5);
    
    this.searchResults = shortList;

    if(input == ""){
      this.searchBarEmpty = true;
      this.searchResults = [];
    }
  }
  checkSize() {
    if(this.app.screenSize == 'normal'){
      return 'heading';
    } else {
      return 'heading-small';
    }
  }
  getTitle(){
    if(this.lang == 'nl'){
      return 'Check hier je ingrediënten!';
    } else {
      return 'Check yourself before you wreck yourself!';
    }
  }
  getPlaceHolder(){
    if(this.lang == 'nl'){
      return 'Schadelijke ingrediënten zoeker';
    } else {
      return 'Harmful ingredient finder';
    }
  }
  getIntro() {
    if(this.lang == 'nl') {
      return `<p class="check-intro">Deze checker controleert de ingrediënten die je invoert. Als jou ingrediënt naar voren komt kun je beter het product vermijden.</p>
              <p class="check-intro">De <a href='http://www.tightlycurly.com/ingredients/'>TightlyCurly</a> website heeft veel voorkomende ingrediënten gesorteerd van "goed" naar "vermijden".
              Ik heb alle ingrediënten die vermeden moeten worden in deze checker verwerkt.</p>
              <p class="check-intro">Als je meer wilt weten over waarom een ingrediënt vermeden dient te worden dan kun je naar de <a href="http://www.tightlycurly.com/ingredients/">TightlyCurly</a> website gaan.`;
    } else {
      return `<p class="check-intro">This checker checks your ingredients. If your ingredient shows up in the search it's probably best to avoid it.</p>
              <p class="check-intro">The <a href='http://www.tightlycurly.com/ingredients/'>TightlyCurly</a> website has categorized ingredients from good to avoid.
              I put the ingredients to be avoided in this checker.</p>
              <p class="check-intro">If you want to know more about why the ingredient should be avoided you can find out on the <a href="http://www.tightlycurly.com/ingredients/">TightlyCurly</a> website. 
              Go check it out and educate yourself!</p>`;
    }
  }

}
