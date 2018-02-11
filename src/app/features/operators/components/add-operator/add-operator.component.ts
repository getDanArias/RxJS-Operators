import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      <div class="form-controls">
        <div class="form-button">
          <app-core-button [name]="'Reset'" [bgColor]="'A60079'"></app-core-button>
        </div>
       <div class="form-button">
         <app-core-button
           [disabled]="addOperatorForm.invalid"
           [name]="'Add'"
           [bgColor]="'A60079'"></app-core-button>
       </div>
      </div>
      {{ addOperatorForm.status }}
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
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

}
