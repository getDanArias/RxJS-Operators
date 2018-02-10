import { Injectable } from '@angular/core';
import { getCategories } from '../../mock/mock-operators';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/pairs';


@Injectable()
export class CategoryDataService {

  categories;
  constructor() {
    this.categories = getCategories();
  }

  getOperatorCountPerCategory = () => {
    const categories$ = Observable.pairs(this.categories);

    return categories$.toArray();
  }
}
