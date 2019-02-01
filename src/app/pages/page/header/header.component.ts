import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../main/app.component';

@Component({
  selector: 'dl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public app: AppComponent) { }

  ngOnInit() {
    
  }
}
