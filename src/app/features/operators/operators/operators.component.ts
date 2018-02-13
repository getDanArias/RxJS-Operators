import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../../core/services/store.service';
import { RecentEventsService } from '../../../core/services/recent-events.service';
import { Operator } from '../../../core/models/State';

@Component({
  selector: 'app-operators',
  template: `
    <div>
      <div class="categories">
        <ng-container *ngIf="categories.length > 0">
          <div class="panel-container">
            <app-list listTitle="Operators Categories" kind="category">
              <app-list-item
                *ngFor="let category of categories"
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
          <app-add-operator></app-add-operator>
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

  selectedCategory;
  selectedCategoryOperators: string[];
  selectedOperator: Operator = {
    id: '',
    name: '',
    description: '',
    categories: {}
  };

  categories = [];

  constructor(
    private categoryDataService: StoreService,
    private recentEventsService: RecentEventsService
  ) { }

  getObjectKeys = (object) => object === undefined ? [] : Object.keys(object);

  ngOnInit() {
    this.categoryDataService.select('categories')
      .subscribe({
        next: (categoriesData) => this.categories = Array.from(Object.values(categoriesData)),
        error: err => console.log(err)
      });
  }

  onSelectCategory(category) {
    this.selectedCategory = category.id;
    this.categoryDataService.getOperators(this.selectedCategory)
      .subscribe({
        next: (operatorsData) => this.selectedCategoryOperators = [...Array.from(Object.keys(operatorsData))],
        error: err => console.log(err)
      });
  }

  onSelectOperator(operator) {
    this.categoryDataService.getOperator(operator)
      .subscribe({
        next: (operatorData: Operator) => this.selectedOperator = operatorData,
        error: err => console.log(err)
      });
    this.recentEventsService.addRecentlyVisited(operator);
  }

}
