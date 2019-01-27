import { Component } from '@angular/core';

@Component({
  selector: 'dl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor() { }

  checkIconSize() {
    if(window.innerWidth < 350) {
      return 'footer-icon-small'
    } else {
      return 'footer-icon'
    }
  }

  checkTextSize() {
    if (window.innerWidth < 270) {
      return 'footer-text-small'
    } else if(window.innerWidth < 350) {
      return 'footer-text-medium'
    } else {
      return 'footer-text'
    }
  }

}
