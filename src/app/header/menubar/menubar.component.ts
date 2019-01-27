import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'dl-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  public lang;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
    this.lang = this.languageService.getLanguage();
  }

}
