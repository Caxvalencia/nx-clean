import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostRepository } from '@migra/posts/core';
import { ApiPostRepository } from '@migra/posts/data';
import { PostsPresentationModule } from '@migra/posts/presentation';

import { AppComponent } from './app.component';
import { TodosRepository } from './core/todos/repositories/todos.repository';
import { JsonTodosRepository } from './data/todos/repositories/json.todos.repository';
import { TodosComponent } from './presentation/todos/todos.component';

@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [BrowserModule, PostsPresentationModule],
  providers: [
    {
      provide: TodosRepository,
      useClass: JsonTodosRepository,
    },

    // Usando libraries
    {
      provide: PostRepository,
      // useClass: FakePostRepository,
      useClass: ApiPostRepository,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
