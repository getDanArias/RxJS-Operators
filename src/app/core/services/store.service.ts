import { Injectable } from '@angular/core';
import { STATE } from '../../mock/mock-state';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/pairs';
import 'rxjs/add/observable/from';
import { State } from '../models/State';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';


@Injectable()
export class StoreService {

  state: State = STATE;

  private subject = new BehaviorSubject<State>(this.state);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  getOperator(name: string) {
    return this.select('operators').pluck(name);
  }

  getOperators(name: string) {
    return this.select('categories').pluck(name).pluck('operators');
  }

  setOperator(state: any) {
    const newOperator = {
      id: '',
      name: '',
      description: '',
      categories: {}
    };

    const operatorName = state.name.toLowerCase();
    const operatorCategory = state.category.toLowerCase();

    newOperator.id  = operatorName;
    newOperator.name  = operatorName;
    newOperator.description = state.description;
    newOperator.categories[operatorCategory] = true;

    let stateUpdate;

    if (this.value.categories[operatorCategory]) {
      stateUpdate = {
        ...this.value,
        operators: {
          ...this.value.operators,
          [operatorName]: newOperator
        },
        categories: {
          ...this.value.categories,
          [operatorCategory]: {
            ...this.value.categories[operatorCategory],
            operators: {
              ...this.value.categories[operatorCategory].operators,
              [operatorName]: true
            }
          }
        }
      };
    } else {
      stateUpdate = {
        ...this.value,
        operators: {
          ...this.value.operators,
          [operatorName]: newOperator
        },
        categories: {
          ...this.value.categories,
          [operatorCategory]: {
            id: operatorCategory,
            name: operatorCategory[0].toUpperCase() + operatorCategory.substring(1),
            operators: {
              [operatorName]: true
            }
          }
        }
      };
    }

    this.subject.next(stateUpdate);
  }
}

