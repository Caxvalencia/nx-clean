import { Injectable } from '@angular/core';
import { Post, PostRepository } from '@migra/posts/core';

import { ApiGetPostResponse } from '../api-get-post.response';
import { getPostListMapper } from '../mappers/get-post.mapper';

@Injectable()
export class ApiPostRepository implements PostRepository {
  static ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

  async get(): Promise<Post[]> {
    const fetchResponse = await fetch(ApiPostRepository.ENDPOINT);
    const posts: ApiGetPostResponse[] = await fetchResponse.json();

    return getPostListMapper(posts);
  }
}
