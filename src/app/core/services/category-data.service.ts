import { Injectable } from '@angular/core';
import { getCategories } from '../../mock/mock-operators';
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
}
