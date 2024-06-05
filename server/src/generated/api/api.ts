export * from './default.service';
import { DefaultService } from './default.service';
export * from './todo.service';
import { TodoService } from './todo.service';
export * from './todos.service';
import { TodosService } from './todos.service';
export const APIS = [DefaultService, TodoService, TodosService];
