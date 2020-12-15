import { TodosEntity } from '../entities/todos.entity';
import { TodosRepository } from '../repositories/todos.repository';

export class AddTodoUseCase {
  constructor(private repository: TodosRepository) {}

  public async execute(todo: TodosEntity): Promise<TodosEntity> {
    const isAdded = await this.repository.add(todo);

    if (isAdded) {
      todo.id = Math.round(Math.random() * 1000 + 1000 / 1000);
    }

    return todo;
  }
}
