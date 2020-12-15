import { Component } from '@angular/core';

import { PostListService } from './post-list.service';

@Component({
  selector: 'nx-clean-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostListService],
})
export class PostListPage {
  constructor(public postListService: PostListService) {}
}
