import { Post } from '../entities/post.entity';

export abstract class PostRepository {
  abstract get(): Promise<Post[]>;
}
