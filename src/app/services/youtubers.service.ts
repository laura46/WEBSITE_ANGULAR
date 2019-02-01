import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import * as data from '../../assets/youtubers.json';

@Injectable({
  providedIn: 'root'
})
export class YoutubersService {

  public youtubers = data.youtubers;

  public youtubersNl = data.youtubersNl;

  constructor(public languageService: LanguageService) { }
  
  getYouTubers() {
    if(this.languageService.getLanguage() == 'nl') {
      return this.youtubersNl;
    } else {
      return this.youtubers;
    }
  }
}

