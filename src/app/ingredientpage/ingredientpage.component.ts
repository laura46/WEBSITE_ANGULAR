import { Component, OnInit, ViewChild } from '@angular/core';
import * as data from '../../assets/harmful-ingredients.json';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ingredientpage',
  templateUrl: './ingredientpage.component.html',
  styleUrls: ['./ingredientpage.component.scss']
})
export class IngredientpageComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource;
 
  displayedColumns: string[] = ['ingredient'];

  public ingredients = data.ingredients;
  public searchBarEmpty = true;
  public resultsEmpty = true;
  public cleanInput: string;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  searchIngredients(input: string) {

    this.searchBarEmpty = false;

    this.cleanInput = input.toLowerCase().replace(/\s/g, "");

    let results = this.ingredients.filter(i => i.toLowerCase().replace(/\s/g, "").indexOf(this.cleanInput) > -1);
    
    this.dataSource.data = results.slice(0, 5);

    if(input == ""){
      this.searchBarEmpty = true;
      this.dataSource.data = [];
    }
  }

}
