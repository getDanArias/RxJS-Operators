import { Operator } from '../shared/models/operator';

const categories = {
  creating: `Creating`,
  transforming: `Transforming`,
  filtering: `Filtering`,
  combining: `Combining`,
  errorHandling: `Error Handling`,
  utility: `Utility`,
  conditionalBoolean: `Conditional and Boolean`,
  mathematicalAggregate: `Mathematical and Aggregate`,
  backpressure: `Backpressure`,
  connectable: `Connectable`,
  converting: `Converting`
};

export const OPERATORS: Operator[] = [
  {
    name: `Create`,
    category: categories.creating,
    description: `create an Observable from scratch by calling observer methods programmatically`
  },
  {
    name: `From`,
    category: categories.creating,
    description: `convert some other object or data structure into an Observable`
  },
  {
    name: `Scan`,
    category: categories.transforming,
    description: `apply a function to each item emitted by an Observable, sequentially, and emit each successive value`
  },
  {
    name: `Filter`,
    category: categories.filtering,
    description: `emit only those items from an Observable that pass a predicate test`
  },
  {
    name: `Map`,
    category: categories.transforming,
    description: `transform the items emitted by an Observable by applying a function to each item`
  }
];
