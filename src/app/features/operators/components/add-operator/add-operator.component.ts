import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-operator',
  template: `
    <div class="add-operator">
      <h3>Add Operator</h3>
      <form [formGroup]="addOperatorForm" novalidate class="add-operator-form">
        <label>
          <span>Name</span>
          <input formControlName="name" size="1"/><br/>
        </label>
        <label>
          <span>Category</span>
          <input formControlName="category" size="1"/><br/>
        </label>
        <label>
          <span>Description</span>
          <input formControlName="description" size="1"/>
        </label>
      </form>
      <div>
      </div>
    </div>
  `,
  styleUrls: ['./add-operator.component.scss']
})
export class AddOperatorComponent implements OnInit {

  @Input() newOperator;

  addOperatorForm = new FormGroup({
    name: new FormControl(),
    category: new FormControl(),
    description: new FormControl()
  });

  ngOnInit() {
  }

}
