import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hs-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: /*html*/`
    <h1>Hello</h1>
  `
})
export class AppComponent {

}
