import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Todo extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'boolean',
    default: false,
  })
  isDone?: boolean;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
