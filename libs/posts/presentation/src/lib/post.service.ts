import { Injectable } from '@angular/core';
import { GetPostUseCase, PostRepository } from '@migra/posts/core';

@Injectable()
export class PostService {
  protected getPostUseCase: GetPostUseCase;

  constructor(private repository: PostRepository) {
    this.getPostUseCase = new GetPostUseCase(this.repository);
  }

  public get() {
    return this.getPostUseCase.invoke();
  }
}
