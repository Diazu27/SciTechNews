import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { IComment } from '../Interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private Url = "https://scitechnewsapi-production.up.railway.app/comment"
  constructor(private http: HttpClient) { }


  
  getCommentCount(PostID:string|null){
    return this.http.get(this.Url+"/getcommentsCount/"+PostID);
  }

  getCommentbyPost(PostID:string|null){
    return this.http.get(this.Url+"/getCommentbyPost/"+PostID);
  }

  addComment(Comment:IComment){
    return this.http.post<any>(this.Url, Comment)
  }

}
