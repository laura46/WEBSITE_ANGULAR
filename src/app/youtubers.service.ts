import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubersService {

  public youtubersCom = [
    {name: 'Penny Tovar',channelName: 'PennyTovar', linkChannel: 'https://www.youtube.com/user/CurlyPenny', videoId: 'hBzg2RbkuyY', description: "Penny Tovar AKA Curly Penny is a very funny and entertaining youTuber, she has a lot of experience with treating her curls with care.<br><br> Her recent videos are more about her personal life but the videos from a few years ago are filled with hair wisdom.<br><br> She clearly educates you on what you shouldn't do to curls in this video.", img: '/assets/pentov.jpg'},
    {name: 'Rochelle Alikay',channelName: 'BlackOnyx77', linkChannel: 'https://www.youtube.com/user/BlackOnyx77', videoId: 'nlblNkVmYB8', description: "This lady has not only shared her knowledge through her channel she has also given us a line of quality products.<br><br> Her <a class='primary' href='https://alikaynaturals.com/'>Alikay Naturals</a> products are my favourite, all the products I tried so far were a massive success for my hair!", img: '/assets/alikay.jpg'},
    {name: 'Green Beauty',channelName: 'GreenBeauty', linkChannel: 'https://www.youtube.com/user/GreenBeautyChannel', videoId: 'lBhMzLNswwk', description: 'The green beauty channel is an absolute treasure of knowledge and clear explanations.<br><br> The clear graphics make the videos interesting to watch and extremely educational.<br><br> This channel gives in-depth information and helps you better understand your hair.', img: '/assets/gb.jpg'},
    {name: 'Farida Sharma',channelName: 'CurlyProverbz', linkChannel: 'https://www.youtube.com/user/remz316', videoId: 'JnN9woLplRQ', description: 'Curly Proverbz is all about length retention and growing healthy hair.<br><br> She uses ayurvedic ingredients to amp up her hair regime.<br><br> She has a lot of great recipes to try out, regardless if you have curly hair or not.', img: '/assets/curpro.jpg'}
  ];

  public youtubersNl = [
    {name: 'Penny Tovar',channelName: 'PennyTovar', linkChannel: 'https://www.youtube.com/user/CurlyPenny', videoId: 'hBzg2RbkuyY', description: "Penny Tovar of Curly Penny is een grappige youTuber, ze heeft veel ervaring met haar krullen onderhouden.<br><br> Haar recente video's gaan meer over haar persoonlijke leven maar de video's van een poosje terug zitten vol haarwijsheid.<br><br>Ze laat je duidelijk zien wat je niet moet doen met krullen in deze video.", img: '/assets/pentov.jpg'},
    {name: 'Rochelle Alikay',channelName: 'BlackOnyx77', linkChannel: 'https://www.youtube.com/user/BlackOnyx77', videoId: 'nlblNkVmYB8', description: "Deze dame heeft niet alleen al haar kennis gedeeld op YouTube ze heeft ook haar eigen haarproductlijn.<br><br> Haar <a class='primary' href='https://www.myhairshop.nl/brand/alikay-naturals'>Alikay Naturals</a> zijn mijn favoriet. Tot zover waren alle producten die ik heb geprobeerd een succes voor mijn haartype!", img: '/assets/alikay.jpg'},
    { name: 'Green Beauty', channelName: 'GreenBeauty', linkChannel: 'https://www.youtube.com/user/GreenBeautyChannel', videoId: 'lBhMzLNswwk', description: 'Het green beauty kanaal is een juweeltje aan kennis en duidelijke uitleg.<br><br>De heldere infographics zorgen ervoor dat de filmpjes interessant en educatief zijn.<br><br> Dit kanaal geeft uitvoerig informatie over haarverzorging en helpt je je haar beter begrijpen.', img: '/assets/gb.jpg'},
    { name: 'Farida Sharma', channelName: 'CurlyProverbz', linkChannel: 'https://www.youtube.com/user/remz316', videoId: 'JnN9woLplRQ', description: 'Curly Proverbz is voornamelijk bezig met het behouden van lengte en een gezonde groei ondersteunen.<br><br> Ze gebruikt ayurvedische ingrediënten om haar verzorging te optimaliseren.<br><br> Ze heeft een boel goede recepten om uit te proberen, ook als je geen krullen hebt.', img: '/assets/curpro.jpg'}
  ];

  constructor(public languageService: LanguageService) { }
  
  getYouTubers() {
    if(this.languageService.getLanguage() == 'nl') {
      return this.youtubersNl;
    } else {
      return this.youtubersCom;
    }
  }
}

