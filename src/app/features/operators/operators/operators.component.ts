import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators',
  template: `
    <div>
      Operators Component:
      {{ operator }}
    </div>
  `,
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  operator = 'map';

  constructor() { }

  ngOnInit() {
  }

}
