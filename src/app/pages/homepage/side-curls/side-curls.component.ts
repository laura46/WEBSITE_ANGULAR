import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'dl-side-curls',
  templateUrl: './side-curls.component.html',
  styleUrls: ['./side-curls.component.scss'],
  animations: [trigger('animateCurls', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.4s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('0.4s', style({ opacity: 0 }))
    ])
  ])]
})
export class SideCurlsComponent {
  private rightClassToCurl = {"one":"sr1", "two":"sr2", "three":"sr3", "four":"sr4", "five":"sr5", "six":"sr6"};
  private leftClassToCurl = {"one":"sl1", "two":"sl2", "three":"sl3", "four":"sl4", "five":"sl5", "six":"sl6"};
  private overlayClassToCurl = {"one":"so1","two":"so2","three":"so3","four":"so4"};
  private stretch = {
    "sl1":false,
    "sl2":false,
    "sl3":false,
    "sl4":false,
    "sl5":false,
    "sl6":false,
    "sr1":false,
    "sr2":false,
    "sr3":false,
    "sr4":false,
    "sr5":false,
    "sr6":false,
    "so1":false,
    "so2":false,
    "so3":false,
    "so4":false,
  };



  constructor() { }

  curlHoverEffect(curl) {
     this.stretch[curl] = !this.stretch[curl];
  }

  svgClassToCurl(curlClass, type) {
    let classesToCheck;
    switch(type){
      case "left":
        classesToCheck = this.leftClassToCurl;
        break;
      case "right":
        classesToCheck = this.rightClassToCurl;
        break;
      case "overlay":
        classesToCheck = this.overlayClassToCurl;
        break;
    }

    for(let key in classesToCheck){
      if(curlClass.indexOf(key) != -1){
        this.curlHoverEffect(classesToCheck[key]);
      }
    }
  }

  resetCurls() {
    for(let key in this.stretch) {
      this.stretch[key] = false;
    }
  }
}
