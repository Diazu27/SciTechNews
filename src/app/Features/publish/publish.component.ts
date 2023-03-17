import { Component, Input } from '@angular/core';
import { IPost, IUser } from 'src/app/Interfaces/Interfaces';
import { CategoryService } from 'src/app/Services/Category.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})


export class PublishComponent {
  Categories:any;
  Title:string;
  ImageUrl:string;
  content:string;
  Category:string;
  isSuccessful:boolean;

  constructor(private CategoryService:CategoryService, private PostService:PostService){
    this.Title="";
    this.ImageUrl="";
    this.content="";
    this.Category="";
    this.isSuccessful = false;
  }

  ngOnInit() {
    this.CategoryService.getCategories().subscribe((res)=>{this.Categories=res})  
  }

  submitPost(){
    if (this.Title === "") return false
    if (this.ImageUrl === "") return false
    if (this.content === "") return false
    if (this.Category === "") return false

    let userData:IUser = JSON.parse(localStorage.getItem('UserData') || '{}')[0];
    let post:IPost = {
      title:this.Title,
      content:this.content,
      imageUrl:this.ImageUrl,
      Categories: [this.Category],
      creatorID: userData._id
    }
    this.PostService.savePost(post).subscribe((res:{_id:string} )=>{
      if(res._id) {this.isSuccessful=true}
    });
    return
  }


}
