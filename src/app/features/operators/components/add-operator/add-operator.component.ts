import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-operator',
  template: `
    <div class="add-operator">
      <h3>Add Operator</h3>
      <div class="add-operator-form">
        <label>
          <span>Name</span>
          <input [formControl]="name" size="1"/><br/>
        </label>
        <label>
          <span>Category</span>
          <input [formControl]="category" size="1"/><br/>
        </label>
        <label>
          <span>Description</span>
          <input [formControl]="description" size="1"/>
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

  name: FormControl = new FormControl();
  category: FormControl = new FormControl();
  description: FormControl = new FormControl();

  ngOnInit() {
  }

}
