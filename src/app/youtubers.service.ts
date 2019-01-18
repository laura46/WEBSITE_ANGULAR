import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubersService {

  public youtubers: {[youtuber: string]: IYoutuber;} = {
    'curlypenny': {name: 'Penny Tovar', linkChannel: 'https://www.youtube.com/user/CurlyPenny', linkVideo: 'https://www.youtube.com/embed/hBzg2RbkuyY', description: "Penny Tovar AKA Curly Penny is a very funny and entertaining youTuber, she has a lot of experience with treating her curls with care. Her recent videos are more about her personal life but the videos from a few years ago are filled with hair wisdom. She clearly educates you on what you shouldn't do to curls in this video.", img: '../../assets/img/pentov.jpg'},
    'alikay': {name: 'BlackOnyx77', linkChannel: 'https://www.youtube.com/user/BlackOnyx77', linkVideo: 'https://www.youtube.com/embed/Sr9lPr8ARTA', description: "This lady has not only shared her knowledge through her channel she also gave us a line of quality products. The product line <a class='primary' href='https://alikaynaturals.com/'>Alikay Naturals</a> is one of my favourites, all the products I tried so far where a massive hit!", img: '../../assets/img/alikay.jpg'},
    'greenbeauty': {name: 'GreenBeauty', linkChannel: 'https://www.youtube.com/user/GreenBeautyChannel', linkVideo: 'https://www.youtube.com/embed/lBhMzLNswwk', description: 'The green beauty channel is an absolute treasure of knowledge and clear explanations. the clear graphics make the videos interesting to watch and extremely educational. This channel gives in-depth information and helps you better understand your hair.', img: '../../assets/img/gb.jpg'},
    'curlyproverbs': {name: 'Curly Proverbz', linkChannel: 'https://www.youtube.com/user/remz316', linkVideo: 'https://www.youtube.com/embed/JnN9woLplRQ', description: 'Curly Proverbz is all about length retention and growing healthy hair. She uses ayuverdic ingredients to amp up her hair regime. She has a lot of great recipes to try out, regardless if you have curly hair or not.', img: '../../assets/img/curpro.jpg'}
  };

  constructor() { }
  
  getYouTubers() {
    return this.youtubers;
  }
}



export interface IYoutuber {
  name: string;
  linkChannel: string;
  linkVideo: string;
  description: string;
  img: string;
}
