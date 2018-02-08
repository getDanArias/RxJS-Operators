import { Component, OnInit } from '@angular/core';
import {Operator} from '../../../shared/models/operator';

@Component({
  selector: 'app-operators',
  template: `
    <div>
      Operators Component:
      {{ operator.name }}
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
