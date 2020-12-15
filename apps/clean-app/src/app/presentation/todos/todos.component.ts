import { Component, OnInit } from '@angular/core';

import { TodosRepository } from '../../core/todos/repositories/todos.repository';
import { AddTodoUseCase } from '../../core/todos/use-cases/add-todo.use-case';

@Component({
  selector: 'nx-clean-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  private addTodoUseCase: AddTodoUseCase;

  constructor(private todosRepository: TodosRepository) {
    this.addTodoUseCase = new AddTodoUseCase(todosRepository);
  }

  async ngOnInit() {
    const data = await this.addTodoUseCase.execute({
      title: 'Titulo 1',
      description: 'Crear interactor',
      isCompleted: false,
    });

    console.log(data);
  }
}
