import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  addOperatorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.addOperatorForm = this.fb.group({
      name: '',
      category: '',
      description: ''
    });
  }

}
