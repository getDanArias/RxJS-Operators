import { Component, OnInit } from '@angular/core';
import { Operator } from '../../../shared/models/operator';

import { CategoryDataService } from '../../../core/services/category-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-operators',
  template: `
    <div>
      <h2>Operators Categories</h2>
      <div class="categories">
        <li
          [ngClass]="{'category-item': true, 'active': selectedCategory === category}"
          (click)="onSelect(category)" *ngFor="let category of (categoryCount$ | async) ">
          {{category.name}}
          {{category.count}}
        </li>
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

  selectedCategory = '';
  categoryCount$: Observable<{name: string, count: number}[]>;

  newOperator: Operator = {
    name: ``,
    category: ``,
    description: ``
  };

  constructor(private categoryData: CategoryDataService) { }

  ngOnInit() {
    this.categoryCount$ = this.categoryData.getOperatorCountPerCategory();
  }

  onSelect(category: string) {
    this.selectedCategory = category;
  }

}
