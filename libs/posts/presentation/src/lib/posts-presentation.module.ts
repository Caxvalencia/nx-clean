import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostListPage } from './post-list/post-list.component';
import { PostListService } from './post-list/post-list.service';
import { PostService } from './post.service';

@NgModule({
  declarations: [PostListPage],
  imports: [CommonModule],
  exports: [PostListPage],
  providers: [PostService, PostListService],
})
export class PostsPresentationModule {}
