import { Component, OnInit } from '@angular/core';

import { CategoryDataService } from '../../../core/services/category-data.service';
import { Category } from '../../../mock/mock-operators';

@Component({
  selector: 'app-operators',
  template: `
    <div>

      <div class="categories">
        <ng-container *ngIf="categories$ | async as categoryData">
          <div class="category-list">
            <h2 class="category-list-header">Operators Categories</h2>
            <div
              class="category-item"
              *ngFor="let category of categoryData"
              [class.active]="selectedCategory === category.id"
              (click)="onSelectCategory($event, category)">
              <span>{{ category.name }}</span>
              <span>{{ getObjectKeys(category.operators).length }}</span>
            </div>
            <div class="category">
            </div>
          </div>
          <div *ngIf="selectedCategory" class="category-details">
            <h2 class="category-details-header">Operators</h2>
            <div class="operator-item"
                 *ngFor="let operator of selectedCategoryOperators"
                 [class.activeOperator]="selectedOperator.id === operator"
                 (click)="onSelectOperator($event, operator)">
              {{ operator }}
            </div>
          </div>
        </ng-container>
      </div>
      <div class="data-interaction">
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
        <div *ngIf="selectedOperator.id" class="display-operator">
          <h2 class="display-operator-header">{{ selectedOperator.name }}</h2>
          <div class="display-operator-details">
            {{ selectedOperator.description }}
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  selectedCategory: Category;
  selectedCategoryOperators: string[];
  selectedOperator = {
    id: '',
    name: '',
    description: '',
    categories: {}
  };
  categories$;

  newOperator: {name: string, category: string, description: string} = {
    name: ``,
    category: ``,
    description: ``
  };

  constructor(private categoryDataService: CategoryDataService) { }

  getObjectKeys = (object) => object === undefined ? [] : Object.keys(object);

  ngOnInit() {
    this.categories$ = this.categoryDataService.getCategories();
  }

  onSelectCategory(event, category) {
    this.selectedCategory = category.id;
    this.selectedCategoryOperators = [...Array.from(Object.keys(category.operators))];
  }

  onSelectOperator(event, operator) {
    this.selectedOperator = this.categoryDataService.getOperator(operator);
  }

}
