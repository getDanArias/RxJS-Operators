import { Component, OnInit } from '@angular/core';

import { CategoryDataService } from '../../../core/services/category-data.service';
import { Category } from '../../../mock/mock-operators';
import { RecentEventsService } from '../../../core/services/recent-events.service';

@Component({
  selector: 'app-operators',
  template: `
    <div>
      <div class="categories">
        <ng-container *ngIf="categories$">
          <div class="panel-container">
            <app-list listTitle="Operators Categories" kind="category">
              <app-list-item
                *ngFor="let category of categories$ | async"
                (click)="onSelectCategory(category)"
                [type]="'category'"
                [active]="selectedCategory === category.id"
                [name]="category.name"
                [count]="getObjectKeys(category.operators).length"
              ></app-list-item>
            </app-list>
          </div>
          <div class="panel-container">
            <app-list *ngIf="selectedCategory" listTitle="Operators" kind="operator">
              <app-list-item
                *ngFor="let operator of selectedCategoryOperators"
                (click)="onSelectOperator(operator)"
                [type]="'operator'"
                [active]="selectedOperator.id === operator"
                [name]="operator"
              ></app-list-item>
            </app-list>
          </div>
        </ng-container>
      </div>
      <div class="data-interaction">
        <div class="panel-container">
          <app-add-operator (refresh)="refresh()" [newOperator]="newOperator"></app-add-operator>
        </div>
        <div class="panel-container" *ngIf="selectedOperator.id">
          <app-operator-display-panel
            [operator]="selectedOperator">
          </app-operator-display-panel>
        </div>
      </div>
      <div class="information">
        <div class="panel-container-small">
          <app-events title="Recently Visited" [headerHexColor]="'1AAC45'"></app-events>
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

  constructor(
    private categoryDataService: CategoryDataService,
    private recentEventsService: RecentEventsService
  ) { }

  getObjectKeys = (object) => object === undefined ? [] : Object.keys(object);

  ngOnInit() {
    this.categories$ = this.categoryDataService.getCategories();
  }

  onSelectCategory(category) {
    this.selectedCategory = category.id;
    this.selectedCategoryOperators = [...Array.from(Object.keys(category.operators))];
  }

  onSelectOperator(operator) {
    this.selectedOperator = this.categoryDataService.getOperator(operator);
    this.recentEventsService.addRecentlyVisited(operator);
  }

  refresh() {
    this.categories$ = this.categoryDataService.getCategories();

    if (this.selectedCategory) {
      this.selectedCategoryOperators = [...Array.from(Object.keys(this.categoryDataService.getCategory(this.selectedCategory).operators))];
    }

  }

}
