import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { IngredientpageComponent } from './ingredientpage/ingredientpage.component';
import { HaircarepageComponent } from './haircarepage/haircarepage.component';
import { ProductspageComponent } from './productspage/productspage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'check', component: IngredientpageComponent },
  { path: 'care', component: HaircarepageComponent },
  { path: 'products', component: ProductspageComponent },
  { path: '.nl', component: ProductspageComponent},
  { path: '.com', component: ProductspageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
