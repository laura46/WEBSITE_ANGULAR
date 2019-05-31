import { Component } from '@angular/core';


@Component({
  selector: 'dl-side-curls',
  templateUrl: './side-curls.component.html',
  styleUrls: ['./side-curls.component.scss']
})
export class SideCurlsComponent {

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

  curlHoverEffect(lock) {
     this.stretch[lock] = !this.stretch[lock];
  }

  resetCurls() {
    for(let key in this.stretch) {
      this.stretch[key] = false;
    }
  }
}
