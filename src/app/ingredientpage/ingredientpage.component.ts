import { Component, OnInit, Inject } from '@angular/core';
import * as data from '../../assets/harmful-ingredients.json';
import { MatTableDataSource } from '@angular/material';
import { WINDOW } from '../app.module.js';


@Component({
  selector: 'app-ingredientpage',
  templateUrl: './ingredientpage.component.html',
  styleUrls: ['./ingredientpage.component.scss']
})
export class IngredientpageComponent implements OnInit {

  dataSource = new MatTableDataSource;
 
  displayedColumns: string[] = ['ingredient'];

  public ingredients = data.ingredients;
  public searchBarEmpty = true;
  public resultsEmpty = true;
  public cleanInput: string;

  constructor(@Inject(WINDOW) private window: Window) { }

  ngOnInit() {
    console.log(this.window);
  }

  searchIngredients(input: string) {

    this.searchBarEmpty = false;

    this.cleanInput = input.toLowerCase().replace(/\s/g, "");

    let results = this.ingredients.filter(i => i.toLowerCase().replace(/\s/g, "").indexOf(this.cleanInput) > -1);
    let shortList = results.slice(0, 5);
    
    this.dataSource.data = shortList;

    if(input == ""){
      this.searchBarEmpty = true;
      this.dataSource.data = [];
    }
  }


}
