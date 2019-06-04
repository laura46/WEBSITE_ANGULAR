import { Component, OnInit } from '@angular/core';
import { SideCurlsComponent } from '../../pages/homepage/side-curls/side-curls.component';

@Component({
  selector: 'dl-lowlight-left',
  templateUrl: './lowlight-left.html'
})
export class LowlightLeftComponent implements OnInit {

  private count = 0;

  constructor(private sidecurls: SideCurlsComponent) { }

  ngOnInit() {
    
  }
  stretchCurl(event) {
    if(this.count == 0){
      let hoveredCurlClass = event.path[1].className;

      if(hoveredCurlClass.indexOf("overlay") != -1){
        this.sidecurls.svgClassToCurl(hoveredCurlClass, "overlay");
      } else {
        this.sidecurls.svgClassToCurl(hoveredCurlClass, "left");
      }
      this.count++;
    }
  }
  curlCurl(event) {
    this.count = 0;
    let hoveredCurlClass = event.path[1].className;

    if(hoveredCurlClass.indexOf("overlay") != -1){
      this.sidecurls.svgClassToCurl(hoveredCurlClass, "overlay");
    } else {
      this.sidecurls.svgClassToCurl(hoveredCurlClass, "left");
    }
  }
}