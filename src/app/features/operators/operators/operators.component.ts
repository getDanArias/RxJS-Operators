import { Component, OnInit } from '@angular/core';
import {Operator} from '../../../shared/models/operator';

@Component({
  selector: 'app-operators',
  template: `
    <div>
      <h3>Operator Details</h3>
      <div>
        {{ operator.name }} <br/>
        {{ operator.category | uppercase }} <br/>
        {{ operator.description }} <br/>
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

  operator: Operator = {
    name: `map`,
    category: `transforming`,
    description: `transform the items emitted by an Observable by applying a function to each item`
  };

  newOperator: Operator = {
    name: ``,
    category: ``,
    description: ``
  };

  constructor() { }

  ngOnInit() {
  }

}
