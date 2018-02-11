import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorDisplayPanelComponent } from './components/operator-display-panel/operator-display-panel.component';
import { OperatorsComponent } from './operators/operators.component';
import { FormsModule } from '@angular/forms';
import { AddOperatorComponent } from './components/add-operator/add-operator.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    OperatorsComponent,
    OperatorDisplayPanelComponent,
    AddOperatorComponent,
    ListItemComponent,
    ListComponent
  ],
  exports: [OperatorsComponent]
})
export class OperatorsModule { }
