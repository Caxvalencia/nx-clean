import { Injectable } from '@angular/core';
import { Post, PostRepository } from '@migra/posts/core';

@Injectable()
export class FakePostRepository implements PostRepository {
  get(): Promise<Post[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          new Post(1, 'title', 'description'),
          new Post(2, 'title2', 'description2'),
        ]);
      }, 2000);
    });
  }
}
