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
import { HighlightPipe } from '../pages/ingredientpage/highlight.pipe';
import { MenuComponent } from '../pages/page/header/menu/menu.component';
import { SideCurlsComponent } from '../pages/homepage/side-curls/side-curls.component';
import { LowlightLeftComponent } from '../elements/curls/lowlight-left';
import { LowlightRightComponent } from '../elements/curls/lowlight-right';
import { HighlightLeftComponent } from '../elements/curls/highlight-left';
import { HighlightRightComponent } from '../elements/curls/highlight-right';
import { StretchLeftComponent } from '../elements/curls/stretch-left';
import { StretchRightComponent } from '../elements/curls/stretch-right';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    IngredientpageComponent,
    HighlightPipe,
    MenuComponent,
    SideCurlsComponent,
    LowlightLeftComponent,
    LowlightRightComponent,
    HighlightLeftComponent,
    HighlightRightComponent,
    StretchLeftComponent,
    StretchRightComponent
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
