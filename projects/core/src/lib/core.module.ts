import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { Dialogs } from './dialogs';
import { Directives } from './directives';
import { Pipes } from './pipes';

import { ServerConfig } from './config';

@NgModule({
  declarations: [
    ...Dialogs,
    ...Directives,
    ...Pipes
  ],
  entryComponents: [
    ...Dialogs
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    ...Dialogs,
    ...Directives,
    ...Pipes
  ]
})
export class CoreModule {
  static forRoot(config: ServerConfig): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: ServerConfig, useValue: config }
      ]
    };
  }
}
