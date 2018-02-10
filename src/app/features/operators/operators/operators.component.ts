import { Component, OnInit } from '@angular/core';
import { Operator } from '../../../shared/models/operator';

import { CategoryDataService } from '../../../core/services/category-data.service';
import 'rxjs/add/operator/share';


@Component({
  selector: 'app-operators',
  template: `
    <div>

      <ng-container *ngIf="categoryPairs$ | async as categoryPairsData">
        <div class="categories">
          <h2 class="category-header">Operators Categories</h2>
          <div
            class="category-item"
            *ngFor="let category of categoryPairsData"
            [class.active]="selectedCategory === category"
            (click)="onSelect(category)">
            <span>{{ category[1].name }}</span>
            <span>{{ getSize(category[1].operators) }}</span>
          </div>
          <div class="category">
          </div>
        </div>
      </ng-container>

      <div class="add-operator">
        <h3>Add Operator</h3>
        <div class="add-operator-form">
          <label>
            <span>Name</span>
            <input [(ngModel)]="newOperator.name"/><br/>
          </label>
          <label>
            <span>Category</span>
            <input [(ngModel)]="newOperator.category"/><br/>
          </label>
          <label>
            <span>Description</span>
            <input [(ngModel)]="newOperator.description"/>
          </label>
        </div>
        <div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  selectedCategory = '';
  categoryPairs$;

  newOperator: Operator = {
    name: ``,
    category: ``,
    description: ``
  };

  constructor(private categoryData: CategoryDataService) { }

  getSize = (object) => object === undefined ? 0 : Object.keys(object).length;

  ngOnInit() {
    this.categoryPairs$ = this.categoryData.getOperatorCountPerCategory();
  }

  onSelect(category: string) {
    this.selectedCategory = category;
  }

}
