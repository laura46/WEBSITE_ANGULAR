import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubersService {

  public youtubers = [
    {name: 'Penny Tovar',channelName: 'PennyTovar', linkChannel: 'https://www.youtube.com/user/CurlyPenny', linkVideo: 'https://www.youtube.com/embed/hBzg2RbkuyY', description: "Penny Tovar AKA Curly Penny is a very funny and entertaining youTuber, she has a lot of experience with treating her curls with care.<br><br> Her recent videos are more about her personal life but the videos from a few years ago are filled with hair wisdom.<br><br> She clearly educates you on what you shouldn't do to curls in this video.", img: '../../assets/img/pentov.jpg', favorite: false},
    {name: 'Rochelle Alikay Graham-Campbell',channelName: 'BlackOnyx77', linkChannel: 'https://www.youtube.com/user/BlackOnyx77', linkVideo: 'https://www.youtube.com/embed/nlblNkVmYB8', description: "This lady has not only shared her knowledge through her channel she has also given us a line of quality products.<br><br> Her <a class='primary' href='https://alikaynaturals.com/'>Alikay Naturals</a> products are my favourite, all the products I tried so far were a massive success for my hair!", img: '../../assets/img/alikay.jpg', favorite: false},
    {name: 'Green Beauty',channelName: 'GreenBeauty', linkChannel: 'https://www.youtube.com/user/GreenBeautyChannel', linkVideo: 'https://www.youtube.com/embed/lBhMzLNswwk', description: 'The green beauty channel is an absolute treasure of knowledge and clear explanations.<br><br> The clear graphics make the videos interesting to watch and extremely educational.<br><br> This channel gives in-depth information and helps you better understand your hair.', img: '../../assets/img/gb.jpg', favorite: false},
    {name: 'Farida Sharma',channelName: 'CurlyProverbz', linkChannel: 'https://www.youtube.com/user/remz316', linkVideo: 'https://www.youtube.com/embed/JnN9woLplRQ', description: 'Curly Proverbz is all about length retention and growing healthy hair.<br><br> She uses ayurvedic ingredients to amp up her hair regime.<br><br> She has a lot of great recipes to try out, regardless if you have curly hair or not.', img: '../../assets/img/curpro.jpg', favorite: false}
  ];

  constructor() { }
  
  getYouTubers() {
    return this.youtubers;
  }
}

