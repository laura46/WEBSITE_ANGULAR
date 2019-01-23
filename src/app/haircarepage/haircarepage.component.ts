import { Component, OnInit } from '@angular/core';
import { YoutubersService } from '../youtubers.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-haircarepage',
  templateUrl: './haircarepage.component.html',
  styleUrls: ['./haircarepage.component.scss']
})
export class HaircarepageComponent implements OnInit {

  public youtubers;
  player: YT.Player;

  constructor(private youtubeService: YoutubersService) {
    
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
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}
