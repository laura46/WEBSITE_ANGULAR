import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(text: string, query: string): string {
    if (!query) {return text;}
    return query ? text.replace(new RegExp(query, 'gi'), `<span class="highlight-text">${query}</span>`) : text;
   // console.log(args);

    //var re = new RegExp(args, 'gi');
    //return value.replace(re, "<span class='hightlight-text'>" + args + "</p>");
  }

}
