import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'dl-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(public app: AppComponent) { }

  checkSize() {
    if(this.app.screenSize == 'normal') {
      return 'heading';
    } else {
      return 'heading-small';
    }
  }
}
