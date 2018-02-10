import { Injectable } from '@angular/core';
import { Operator } from '../../shared/models/operator';
import { CATEGORIES, OPERATORS } from '../../mock/mock-operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryDataService {

  categories: string[] = Object.values(CATEGORIES);
  operators: Operator[] = OPERATORS;
  categoryCount: Map<string, number> = new Map();

  constructor() {
    this.categories.map(category => this.categoryCount.set(category, 0));

    this.operators.map((operator: Operator) => this.categoryCount.set(operator.category, this.categoryCount.get(operator.category) + 1));
  }

  getOperatorCountPerCategory = () => {
    const categoriesQuantity = this.categoryCount.size;
    const keys$ = Observable.from(Array.from(this.categoryCount.keys()));
    const values$ = Observable.from(Array.from(this.categoryCount.values()));

    return Observable.zip(
      keys$,
      values$
    )
      .map(data => ({name: data[0], count: data[1]}))
      .take(categoriesQuantity)
      .toArray();
  }
}
