import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { InViewportModule } from 'ng-in-viewport';
import { CatalogPipesModule } from '@app/catalog/pipes';

const DECLARATIONS = [
];

const IMPORTS = [
  CommonModule,
  RouterModule,
  MaterialModule,
  InViewportModule,
  CatalogPipesModule
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
