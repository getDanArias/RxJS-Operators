import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreButtonComponent } from './components/core-button/core-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreButtonComponent],
  exports: [CoreButtonComponent]
})
export class UiElementsModule { }
