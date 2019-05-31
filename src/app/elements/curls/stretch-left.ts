import { Component, OnInit } from '@angular/core';
import { SideCurlsComponent } from '../../pages/homepage/side-curls/side-curls.component';

@Component({
  selector: 'dl-stretch-left',
  templateUrl: './stretch-left.html'
})
export class StretchLeftComponent implements OnInit {

  constructor(private sidecurls: SideCurlsComponent) { }

  ngOnInit() {
    
  }

  stretchCurl(event) {
    this.sidecurls.curlHoverEffect('');
    
    console.log(event.selector);
  }
}