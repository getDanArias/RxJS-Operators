import { Injectable } from '@angular/core';
import { getCategories, getCategory, getOperator, insertOperator } from '../../mock/mock-operators';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/pairs';
import 'rxjs/add/observable/from';


@Injectable()
export class CategoryDataService {

  categories;

  constructor() {
    this.categories = getCategories();
  }

  getCategories = () => Observable.from([Array.from(Object.values(this.categories))]);

  getOperator = (operator) => getOperator(operator);

  insertOperator = (data) => insertOperator(data);

  getCategory = (categoryID) => getCategory(categoryID);

}

