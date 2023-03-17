import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input() comment:any
  UserData:any;
  constructor(private UserService:UserService){}

  ngOnInit(){
    this.UserService.getUserByID(this.comment.UserID).subscribe((res)=>{this.UserData=res})
  }

}
