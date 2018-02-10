interface State {
  'categories': {
    [key: string]: {
      name: string,
      operators: {
        [key: string]: boolean
      }
    }
  };
  'operators': {
    [key: string]: {
      name: string,
      description: string,
      categories: {
        [key: string]: boolean
      }
    }
  };
}

const STATE: State = {
  'categories': {
    'creating': {
      name: 'Creating',
      operators: {
        'create': true,
        'from': true
      }
    },
    'transforming': {
      name: 'Transforming',
      operators: {
        'scan': true,
        'map': true
      }
    },
    'filtering': {
      name: 'Filtering',
      operators: {
        'filter': true
      }
    }
  },
  'operators': {
    'create': {
      name: 'Create',
      description: 'create an Observable from scratch by calling observer methods programmatically',
      categories: {
        'creating': true
      }
    },
    'from': {
      name: 'From',
      description: 'convert some other object or data structure into an Observable',
      categories: {
        'creating': true
      }
    },
    'map': {
      name: 'Map',
      description: 'transform the items emitted by an Observable by applying a function to each item',
      categories: {
        'transforming': true
      }
    },
    'scan': {
      name: 'Scan',
      description: 'apply a function to each item emitted by an Observable, sequentially, and emit each successive value',
      categories: {
        'transforming': true
      }
    },
    'filter': {
      name: 'Filter',
      description: 'emit only those items from an Observable that pass a predicate test',
      categories: {
        'filtering': true
      }
    }
  }
};

export const getCategories = () => {
  return STATE['categories'];
};
