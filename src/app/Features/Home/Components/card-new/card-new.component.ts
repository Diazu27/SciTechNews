import { Component, Input } from '@angular/core';
import { CommentsService } from 'src/app/Services/comments.service';
import { LikesService } from 'src/app/Services/likes.service';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent {
    @Input() post: any;
    
    LikesCount:any;
    CommentCount:any;
    PostID:any;


    constructor(private CommentsService: CommentsService, private LikesService:LikesService){
    }

    ngOnInit(){
      this.PostID = this.post._id
      this.CommentsService.getCommentCount(this.PostID).subscribe(res => this.CommentCount = res)
      this.LikesService.getLikesCount(this.PostID).subscribe(res => this.LikesCount = res);
    }

}
