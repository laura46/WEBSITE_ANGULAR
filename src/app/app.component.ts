import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dutch Locks';

  public screenSize;

  ngOnInit(){
    if (window.innerWidth > 960){
      this.screenSize = 'normal';
    } else if (window.innerWidth < 350) {
      this.screenSize = 'tiny';
    } else {
      this.screenSize = 'small';
    }
  }
}
