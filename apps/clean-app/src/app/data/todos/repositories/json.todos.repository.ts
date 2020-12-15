import { Injectable } from '@angular/core';

import { TodosEntity } from '../../../core/todos/entities/todos.entity';
import { TodosRepository } from '../../../core/todos/repositories/todos.repository';

@Injectable()
export class JsonTodosRepository implements TodosRepository {
  add(todo: TodosEntity): Promise<boolean> {
    return Promise.resolve(!todo.id);
  }

  delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
