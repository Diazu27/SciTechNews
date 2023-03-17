import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { IPost } from '../Interfaces/Interfaces';


@Injectable({
  providedIn: 'root'
})
export class PostService {


  private Url = "https://scitechnewsapi-production.up.railway.app/post"

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.Url);
  }

  getPostByID(postID:string|null){
    return this.http.get(this.Url+"/"+postID);
  }

  savePost(Post:IPost){
    return this.http.post<any>(this.Url,Post);
  }

}
