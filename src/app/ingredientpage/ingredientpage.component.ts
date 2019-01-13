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
  //displayedColumns: string[] = ['name'];
  displayedColumns: string[] = ['ingredient'];

  public ingredients = data.ingredients;
  public result = [];
  public searchBarEmpty = true;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  searchIngredients(input: string) {

    this.searchBarEmpty = false;

    let cleanInput = input.toLowerCase().replace(/\s/g, "");

    this.result = this.ingredients.filter(i => i.toLowerCase().replace(/\s/g, "").indexOf(cleanInput) > -1);
    
    if(input == ""){
      this.searchBarEmpty = true;
    }

    console.log(this.result);
  }

}
