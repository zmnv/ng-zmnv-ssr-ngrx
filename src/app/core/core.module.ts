import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '@app/shared/shared.module';

export const COMPONENTS = [
  AppComponent,
];

export const MODULES = [
  SharedModule
];

@NgModule({
  imports: [MODULES],
  declarations: [...COMPONENTS],
  exports: [...MODULES, ...COMPONENTS]
})
export class CoreModule {}
