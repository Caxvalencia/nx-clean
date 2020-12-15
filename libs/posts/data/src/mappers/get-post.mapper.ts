import { Post } from '@migra/posts/core';

import { ApiGetPostResponse } from '../api-get-post.response';

export function getPostMapper(source: ApiGetPostResponse): Post {
  return new Post(source.id, source.title, source.body);
}

export function getPostListMapper(sourceList: ApiGetPostResponse[]): Post[] {
  return sourceList.map((source) => getPostMapper(source));
}
