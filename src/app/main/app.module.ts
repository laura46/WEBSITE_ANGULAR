import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatExpansionModule,
  MatTableModule, MatCardModule, MatTooltipModule, MatListModule, MatMenuModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { HeaderComponent } from '../pages/page/header/header.component';
import { FooterComponent } from '../pages/page/footer/footer.component';
import { MenubarComponent } from '../pages/page/header/menubar/menubar.component';
import { IngredientpageComponent } from '../pages/ingredientpage/ingredientpage.component';
import { HaircarepageComponent } from '../pages/haircarepage/haircarepage.component';
import { ProductspageComponent } from '../pages/productspage/productspage.component';
import { HighlightPipe } from '../pages/ingredientpage/highlight.pipe';
import { MenuComponent } from '../pages/page/header/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    IngredientpageComponent,
    HaircarepageComponent,
    ProductspageComponent,
    HighlightPipe,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, MatIconModule,MatInputModule,MatTableModule,
    MatTooltipModule, MatCardModule, MatListModule, MatMenuModule, MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
