import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'dl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public lang;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
    this.lang = this.languageService.getLanguage();
  }

}
