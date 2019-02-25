import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root',
})
export class CoreScrollService {

  constructor(private _scrollToService: ScrollToService) { }

  triggerScrollTo(fragment: string, _duration = 650, _easing = 'easeOutElastic') {

    // console.log('scroll to:', fragment);

    const config: ScrollToConfigOptions = {
      target: fragment,
      duration: _duration,
      easing: 'easeOutElastic',
      offset: 0
    };

    setTimeout(() => {
      this._scrollToService.scrollTo(config);
    }, 0);
  }
}
