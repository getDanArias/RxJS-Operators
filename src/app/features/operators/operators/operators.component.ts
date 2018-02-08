import { Component, OnInit } from '@angular/core';
import {Operator} from '../../../shared/models/operator';

@Component({
  selector: 'app-operators',
  template: `
    <div>
      Operator Details
      <div>
        {{ operator.name }} <br/>
        {{ operator.category | uppercase }} <br/>
        {{ operator.description }} <br/>
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

  constructor() { }

  ngOnInit() {
  }

}
