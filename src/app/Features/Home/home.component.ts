import { Component } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts:any;
  interactions:any;
  constructor(private PostService: PostService) { }

  ngOnInit() {
    this.PostService.getPosts().subscribe((res)=>{
      this.posts=res;
    })
  }

}
