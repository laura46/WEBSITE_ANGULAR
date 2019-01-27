import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { YoutubePlayerModule } from 'ngx-youtube-player';

import { MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule,
  MatTableModule, MatCardModule, MatTooltipModule, MatListModule, MatMenuModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './header/menubar/menubar.component';
import { IngredientpageComponent } from './ingredientpage/ingredientpage.component';
import { HaircarepageComponent } from './haircarepage/haircarepage.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { HighlightPipe } from './ingredientpage/highlight.pipe';
import { MenuComponent } from './header/menu/menu.component';


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
    MatTooltipModule, MatCardModule, MatListModule, MatMenuModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
