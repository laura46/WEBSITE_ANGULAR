import { Component, OnInit } from '@angular/core';
import { YoutubersService } from '../youtubers.service';
import { from } from 'rxjs';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-haircarepage',
  templateUrl: './haircarepage.component.html',
  styleUrls: ['./haircarepage.component.scss']
})
export class HaircarepageComponent implements OnInit {

  public youtubers;
  player: YT.Player;

  constructor(private youtubeService: YoutubersService, public app: AppComponent) {
    
  }

  ngOnInit() {
    from(this.youtubeService.getYouTubers()).subscribe(() => {
      this.youtubers = this.youtubeService.getYouTubers();
    });
  }

  goto(youtuber) {
    window.open(youtuber);
  }

  favor(element) {
   element.innerHTML = 'favorite';
   return element;
  }

  savePlayer(player) {
    this.player = player;
  }

  checkSize(){  
    if(window.innerWidth < 350) {
      return 240;
    } else if(window.innerWidth > 349 && window.innerWidth < 450) {
      return 300;
    } else {
      return 420;
    }
  }

  setClass() {
      if( window.innerWidth < 430) {
        return 'youtuber-card-tiny';
      } else {
        return 'youtuber-card';
      }
  }
}
