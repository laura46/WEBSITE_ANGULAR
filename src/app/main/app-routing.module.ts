import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { IngredientpageComponent } from '../pages/ingredientpage/ingredientpage.component';
import { HaircarepageComponent } from '../pages/haircarepage/haircarepage.component';
import { ProductspageComponent } from '../pages/productspage/productspage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'check', component: IngredientpageComponent },
  { path: 'care', component: HaircarepageComponent },
  { path: 'products', component: ProductspageComponent }
];

//comment

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
