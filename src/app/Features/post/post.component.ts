import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment, ILike, IUser } from 'src/app/Interfaces/Interfaces';
import { CommentsService } from 'src/app/Services/comments.service';
import { LikesService } from 'src/app/Services/likes.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  PostID:string|null;
  postData:any;
  isCommentFormOpen:boolean;
  CommentContent:any;
  Comments:any;
  LikesCount:any;
  CommentCount:any;
  userDataLogged:IUser;
  isLiked:boolean;
  LikeID:any;

  constructor(private route: ActivatedRoute, private PostService: PostService, private CommentsService: CommentsService, private LikesService:LikesService,private router: Router) {
    this.PostID="";
    this.isCommentFormOpen=false;
    this.CommentContent ="";
    this.LikesCount = 0;
    this.CommentCount = 0;
    this.userDataLogged = JSON.parse(localStorage.getItem('UserData') || '{}')[0];
    this.isLiked = false;
  }

  ngOnInit() {
    this.PostID = this.route.snapshot.paramMap.get('id');
    this.PostService.getPostByID(this.PostID).subscribe((res)=>{this.postData=res})
    this.CommentsService.getCommentbyPost(this.PostID).subscribe(res => this.Comments = res)
    this.CommentsService.getCommentCount(this.PostID).subscribe(res => this.CommentCount = res)
    this.LikesService.getLikesCount(this.PostID).subscribe(res => this.LikesCount = res);
    let likePost:ILike = {
      PostID: this.PostID || "",
      UserID: this.userDataLogged._id,
    }
    this.LikesService.isLiked(likePost).subscribe((res:{isLiked:boolean}) => this.isLiked =res.isLiked )
    this.LikesService.getLikeInfo(likePost).subscribe((res)=>{
      this.LikeID = res[0]._id;  
    });
  }

  OpenformComent(){
    this.isCommentFormOpen = !this.isCommentFormOpen;;
  }

  sendComment(CommentContent:string){
    let Comment:IComment = {
      PostID: this.PostID || "",
      UserID: this.userDataLogged._id,
      Content: CommentContent
    }
    this.CommentsService.addComment(Comment).subscribe((res:{_id:string})=>{
      if (res._id){this.resetComponent()}
    });
  }

  likePost(){
    if(this.userDataLogged == null) {
      this.router.navigate(['login']);
      return
    }

    let likePost:ILike = {
      PostID: this.PostID || "",
      UserID: this.userDataLogged._id,
    }
    if(this.isLiked){
      this.LikesService.unlike(this.LikeID).subscribe(res=>{
        this.isLiked = false;
        this.LikesService.getLikesCount(this.PostID).subscribe(res => this.LikesCount = res);
      });
    }else{
      this.LikesService.postLike(likePost).subscribe(res =>{
        this.isLiked = true;
        this.LikesService.getLikesCount(this.PostID).subscribe(res => this.LikesCount = res);
      });
    }
  }

  resetComponent(){
     const currentRoute = this.router.url;
     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
         this.router.navigate([currentRoute]); // navigate to same route
     }); 
  }

}
