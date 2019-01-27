import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/harmful-ingredients.json';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-ingredientpage',
  templateUrl: './ingredientpage.component.html',
  styleUrls: ['./ingredientpage.component.scss']
})
export class IngredientpageComponent implements OnInit {

  public ingredients = data.ingredients;
  public searchResults = [];
  public searchBarEmpty = true;
  public resultsEmpty = true;
  public cleanInput: string;

  constructor(public app: AppComponent) { }

  ngOnInit() {

  }

  searchIngredients(input: string) {

    this.searchBarEmpty = false;

    this.cleanInput = input.toLowerCase().replace(/\s/g, "");

    let results = this.ingredients.filter(i => i.toLowerCase().replace(/\s/g, "").indexOf(this.cleanInput) > -1);
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

}
