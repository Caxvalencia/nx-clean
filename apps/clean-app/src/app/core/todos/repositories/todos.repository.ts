import { TodosEntity } from '../entities/todos.entity';

export abstract class TodosRepository {
  abstract add(todo: TodosEntity): Promise<boolean>;

  abstract delete(id: number): Promise<boolean>;
}
