import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostRepository } from '@migra/posts/core';
import { ApiPostRepository, FakePostRepository } from '@migra/posts/data';

import { AppComponent } from './app.component';
import { TodosRepository } from './core/todos/repositories/todos.repository';
import { JsonTodosRepository } from './data/todos/repositories/json.todos.repository';
import { PostListComponent } from './presentation/post/post-list/post-list.component';
import { TodosComponent } from './presentation/todos/todos.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, PostListComponent],
  imports: [BrowserModule],
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
