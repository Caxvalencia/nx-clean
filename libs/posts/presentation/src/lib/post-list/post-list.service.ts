import { Injectable } from '@angular/core';

import { PostService } from '../post.service';

@Injectable()
export class PostListService {
  public posts$ = null;

  constructor(private postService: PostService) {
    this.posts$ = this.postService.get();
  }
}
