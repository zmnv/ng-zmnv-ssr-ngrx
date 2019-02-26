import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

const DECLARATIONS = [
];

const IMPORTS = [
  CommonModule,
  RouterModule,
  MaterialModule
];

@NgModule({
  imports: [
    ...IMPORTS
  ],
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...IMPORTS,
    ...DECLARATIONS
  ]
})
export class SharedModule { }
