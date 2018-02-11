import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-operator',
  template: `
    <div class="add-operator">
      <h3>Add Operator</h3>
      <div class="add-operator-form">
        <label>
          <span>Name</span>
          <input size="1" [(ngModel)]="newOperator.name"/><br/>
        </label>
        <label>
          <span>Category</span>
          <input size="1" [(ngModel)]="newOperator.category"/><br/>
        </label>
        <label>
          <span>Description</span>
          <input size="1" [(ngModel)]="newOperator.description"/>
        </label>
      </div>
      <div>
      </div>
    </div>
  `,
  styleUrls: ['./add-operator.component.scss']
})
export class AddOperatorComponent implements OnInit {

  @Input() newOperator;

  ngOnInit() {
  }

}
