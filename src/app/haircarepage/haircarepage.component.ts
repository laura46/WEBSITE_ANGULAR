import { Component, OnInit } from '@angular/core';
import { YoutubersService, IYoutuber } from '../youtubers.service';


@Component({
  selector: 'app-haircarepage',
  templateUrl: './haircarepage.component.html',
  styleUrls: ['./haircarepage.component.scss']
})
export class HaircarepageComponent implements OnInit {

  public youtubers;

  constructor(private youtubeService: YoutubersService) { }

  ngOnInit() {
    this.youtubers = this.youtubeService.getYouTubers();
  }

}
