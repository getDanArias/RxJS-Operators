import { Component, OnInit } from '@angular/core';
import { Operator } from '../../../shared/models/operator';

import { OPERATORS } from '../../../mock/mock-operators';

@Component({
  selector: 'app-operators',
  template: `
    <div>
      <h2>Operators</h2>
      <ul class="operators">
        <li (click)="onSelect(operator)" *ngFor="let operator of operators">
          {{operator.name}}
        </li>
      </ul>

      <h2>{{ selectedOperator.name | uppercase }}</h2>
      <div>
        <span>{{ selectedOperator.category }}</span>
        <span>{{ selectedOperator.description }}</span>
      </div>

      <h3>New Operator</h3>
      <div>
        <label>
          name: <input [(ngModel)]="newOperator.name"/><br/>
        </label>
        <label>
          category: <input [(ngModel)]="newOperator.category"/><br/>
        </label>
        <label>
          description: <input [(ngModel)]="newOperator.description"/>
        </label>
      </div>
      <div>
        {{newOperator | json}}
      </div>
    </div>
  `,
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  operators: Operator[] = OPERATORS;
  selectedOperator: Operator = {
    name: ``,
    category: ``,
    description: ``
  };

  newOperator: Operator = {
    name: ``,
    category: ``,
    description: ``
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(operator: Operator) {
    this.selectedOperator = operator;
  }

}
