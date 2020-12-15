import { PostRepository } from '../repositories/post.repository';

export class GetPostUseCase {
  constructor(private repository: PostRepository) {}

  public invoke() {
    return this.repository.get();
  }
}
