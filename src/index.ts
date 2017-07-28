import {FloatingActionButton} from './floating-action-menu/floating-action-button';
import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatingActionMenuComponent} from './floating-action-menu/floating-action-menu.component';
import {FloatingActionButtonComponent} from './floating-action-menu/floating-action-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      FloatingActionMenuComponent,
      FloatingActionButtonComponent,
      FloatingActionButton
  ],
  exports: [
      FloatingActionMenuComponent,
      FloatingActionButtonComponent,
      FloatingActionButton
  ]
})
export class FloatingActionMenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FloatingActionMenuModule,
      providers: []
    };
  }
}
