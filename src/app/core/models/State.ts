export interface CategoryOperator {
  [key: string]: boolean;
}

export interface Category {
  id: string;
  name: string;
  operators: CategoryOperator;
}

export interface Operator {
  id: string;
  name: string;
  description: string;
  categories: {
    [key: string]: boolean
  };
}

interface CategoriesState {
  [key: string]: Category;
}

interface OperatorsState {
  [key: string]: Operator;
}

export interface State {
  'categories': CategoriesState;
  'operators': OperatorsState;
}
