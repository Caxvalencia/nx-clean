import { Component, OnInit } from '@angular/core';
import { Post } from '@migra/posts/core';

import { PostListService } from './post-list.service';

@Component({
  selector: 'nx-clean-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostListService],
})
export class PostListComponent implements OnInit {
  public posts: Post[];

  constructor(private postListService: PostListService) {}

  async ngOnInit() {
    this.posts = await this.postListService.get();
  }
}
