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

interface State {
  'categories': CategoriesState;
  'operators': OperatorsState;
}

const STATE: State = {
  categories: {
    'creating': {
      id: 'creating',
      name: 'Creating',
      operators: {
        'create': true,
        'from': true,
        'start': true,
        'range': true
      }
    },
    'transforming': {
      id: 'transforming',
      name: 'Transforming',
      operators: {
        'scan': true,
        'map': true
      }
    },
    'filtering': {
      id: 'filtering',
      name: 'Filtering',
      operators: {
        'filter': true
      }
    },
    'aggregating': {
      id: 'aggregating',
      name: 'Aggregating',
      operators: {
      }
    },
  },
  operators: {
    'create': {
      id: 'create',
      name: 'create',
      description: 'create an Observable from scratch by calling observer methods programmatically',
      categories: {
        'creating': true
      }
    },
    'from': {
      id: 'from',
      name: 'from',
      description: 'convert some other object or data structure into an Observable',
      categories: {
        'creating': true
      }
    },
    'map': {
      id: 'map',
      name: 'map',
      description: 'transform the items emitted by an Observable by applying a function to each item',
      categories: {
        'transforming': true
      }
    },
    'scan': {
      id: 'scan',
      name: 'scan',
      description: 'apply a function to each item emitted by an Observable, sequentially, and emit each successive value',
      categories: {
        'transforming': true
      }
    },
    'filter': {
      id: 'filter',
      name: 'filter',
      description: 'emit only those items from an Observable that pass a predicate test',
      categories: {
        'filtering': true
      }
    },
    'start': {
      id: 'start',
      name: 'start',
      description: 'create an Observable that emits the return value of a function',
      categories: {
        'creating': true
      }
    },
    'range': {
      id: 'range',
      name: 'range',
      description: 'create an Observable that emits a range of sequential integers',
      categories: {
        'creating': true
      }
    }
  }
};

export const getCategories = () => {
  return STATE.categories;
};

export const getOperators = () => {
  return STATE.operators;
};

export const getOperator = (operator) => getOperators()[operator];

export const getCategory = (categoryID) => {
  return STATE.categories[categoryID];
};

export const insertOperator = (data) => {

  const dataModel = {
    id: '',
    name: '',
    description: '',
    categories: {}
  };

  const operatorName = data.name.toLowerCase();
  const operatorCategory = data.category.toLowerCase();

  dataModel.id  = operatorName;
  dataModel.name  = operatorName;
  dataModel.description = data.description;
  dataModel.categories[operatorCategory] = true;

  const category = STATE.categories[operatorCategory];

  if (category) {
    category.operators[operatorName] = true;
  } else {
    STATE.categories[operatorCategory] = {
      id: operatorCategory,
      name: operatorCategory[0].toUpperCase() + operatorCategory.substring(1),
      operators: {
        [operatorName]: true
      }
    };
  }

  STATE.operators[operatorName] = dataModel;
};
