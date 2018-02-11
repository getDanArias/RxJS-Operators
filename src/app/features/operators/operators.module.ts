import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorDisplayPanelComponent } from './components/operator-display-panel/operator-display-panel.component';
import { OperatorsComponent } from './operators/operators.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    OperatorsComponent,
    OperatorDisplayPanelComponent
  ],
  exports: [OperatorsComponent]
})
export class OperatorsModule { }
