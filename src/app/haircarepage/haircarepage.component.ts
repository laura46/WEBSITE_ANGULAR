import { Component, OnInit } from '@angular/core';
import { YoutubersService } from '../youtubers.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-haircarepage',
  templateUrl: './haircarepage.component.html',
  styleUrls: ['./haircarepage.component.scss']
})
export class HaircarepageComponent implements OnInit {

  public youtubers;

  constructor(private youtubeService: YoutubersService, private sanitizer: DomSanitizer) {
    
   }

  ngOnInit() {
    this.youtubers = this.youtubeService.getYouTubers(); 
    
  }

  sanitize(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  goto(youtuber) {
    window.open(youtuber);
  }

  favor(youtuber) {
   console.log(youtuber);
   youtuber = true;
   console.log(youtuber);
   return youtuber;
  }

}
