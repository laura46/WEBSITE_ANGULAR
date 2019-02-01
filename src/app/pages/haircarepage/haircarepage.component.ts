import { Component, OnInit } from '@angular/core';
import { YoutubersService } from '../../services/youtubers.service';
import { from } from 'rxjs';
import { AppComponent } from '../../main/app.component';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-haircarepage',
  templateUrl: './haircarepage.component.html',
  styleUrls: ['./haircarepage.component.scss']
})
export class HaircarepageComponent implements OnInit {

  public youtubers;
  player: YT.Player;
  public lang;

  constructor(public laguageService: LanguageService, private youtubeService: YoutubersService, public app: AppComponent) {
    
  }

  ngOnInit() {
    from(this.youtubeService.getYouTubers()).subscribe(() => {
      this.youtubers = this.youtubeService.getYouTubers();
    });

    this.lang = this.laguageService.getLanguage();
  }

  getIntro() {
    if(this.lang == 'nl') {
      return `<p>
      YouTube is vooral een goede plek om te leren van veel verschillende mensen over de hele wereld.
    </p>
    <p>
      Je kan ervoor kiezen om mensen te volgen die hetzelfde haartype als jou hebben of je kan inspiratie opdoen bij andere haartypes.
    </p>
    <p>
      Dit zijn een paar van de kanalen waar ik persoonlijk veel aan heb gehad.
    </p>`;
    } else {
      return `<p>
      YouTube especially is a great place to learn from different people all over the world.
    </p>
    <p>
      You can follow people that match your hairtype or draw inspiration from different hairtypes.
    </p>
    <p>
      These are some of the channels I found very useful.
    </p>`;
    }
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
