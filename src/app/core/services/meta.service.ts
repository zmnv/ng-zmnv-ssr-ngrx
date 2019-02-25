import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

export interface CoreHeadMeta {
  title: string;
  description: string;
  url?: string;
  image: string;
  keywords?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CoreMetaService {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private location: Location
  ) {}

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  setMeta(head: CoreHeadMeta) {
    // console.log('GO LOCATUION', this.location.path(true));
    // console.log('[!!CoreMetaService] ');
    this.titleService.setTitle(head.title);
    this.metaService.addTags([
      {name: 'title', content: head.title},
      {name: 'description', content: head.description},
      {name: 'keywords', content: head.keywords},

      {name: 'og:type', content: 'website'},
      // {name: 'og:url', content: this.location.path(true)},
      {name: 'og:title', content: head.title},
      {name: 'og:description', content: head.description},
      {name: 'og:image', content: `//api.spacesib.ru/uploads/${head.image}`},

      {name: 'twitter:card', content: 'summary_large_image'},
      // {name: 'twitter:url', content: this.location.path(true)},
      {name: 'twitter:title', content: head.title},
      {name: 'twitter:description', content: head.description},
      {name: 'twitter:image', content: `//api.spacesib.ru/uploads/${head.image}`},
    ], false);
  }

}
