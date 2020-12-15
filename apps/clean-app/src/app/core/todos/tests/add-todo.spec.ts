import { TodosEntity } from '../entities/todos.entity';
import { TodosRepository } from '../repositories/todos.repository';
import { AddTodoUseCase } from '../use-cases/add-todo.use-case';

describe('AddTodoUseCase', () => {
  let repository: TodosRepository;
  let addTodoUseCase: AddTodoUseCase;

  beforeEach(async () => {
    repository = { add() {} } as any;
    addTodoUseCase = new AddTodoUseCase(repository);
  });

  it(`Given a input data
      When user add task into todo list
      Then should return a task with id`, async () => {
    // Arrange
    spyOn(repository, 'add').and.returnValue(Promise.resolve(true));

    const data: TodosEntity = {
      title: 'test',
      description: 'test-description',
      isCompleted: false,
    };

    // Act
    const response = await addTodoUseCase.execute(data);

    // Assert
    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
  });

  it(`Given a input data
      When user add task into todo list
      Then should return a task without id`, async () => {
    // Arrange
    spyOn(repository, 'add').and.returnValue(Promise.resolve(false));

    const data: TodosEntity = {
      title: 'test',
      description: 'test-description',
      isCompleted: false,
    };

    // Act
    const response = await addTodoUseCase.execute(data);

    // Assert
    expect(response).toBeDefined();
    expect(response.id).toBeUndefined();
  });
});
