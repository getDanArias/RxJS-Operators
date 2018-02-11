import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorDisplayPanelComponent } from './components/operator-display-panel/operator-display-panel.component';
import { OperatorsComponent } from './operators/operators.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddOperatorComponent } from './components/add-operator/add-operator.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    OperatorsComponent,
    OperatorDisplayPanelComponent,
    AddOperatorComponent,
    ListItemComponent,
    ListComponent,
    EventsComponent
  ],
  exports: [OperatorsComponent]
})
export class OperatorsModule { }
