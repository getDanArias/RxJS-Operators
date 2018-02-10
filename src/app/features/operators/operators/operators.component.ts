import { Component, OnInit } from '@angular/core';
import { Operator } from '../../../shared/models/operator';

import { CategoryDataService } from '../../../core/services/category-data.service';
import 'rxjs/add/operator/share';


@Component({
  selector: 'app-operators',
  template: `
    <div>

      <ng-container *ngIf="categoryPairs$ | async as categoryPairsData">
        <h2>Operators Categories</h2>

        <div class="categories">
          <div
            [ngClass]="{'category-item': true, 'active': selectedCategory === category}"
            (click)="onSelect(category)" *ngFor="let category of categoryPairsData">
            <span>{{ category[1].name }}</span>
            <span>{{ getSize(category[1].operators) }}</span>
          </div>
          <div class="category">
          </div>
        </div>
      </ng-container>

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
