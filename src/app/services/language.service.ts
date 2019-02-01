import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getLanguage() {
    if(window.location.href.indexOf('.nl') !== -1){
      return 'nl';
    }
    if(window.location.href.indexOf('.com') !== -1){
      return 'com';
    } 
  }
}
