import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '@app/shared/shared.module';

export const COMPONENTS = [
  AppComponent,
];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  exports: [SharedModule, ...COMPONENTS]
})
export class CoreModule {}
