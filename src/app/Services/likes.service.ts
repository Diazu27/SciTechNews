import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { ILike } from '../Interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private Url = "https://scitechnewsapi-production.up.railway.app/like"
  constructor(private http: HttpClient) { }

  getLikesCount(PostID:string|null){
    return this.http.get(this.Url+"/LikeCount/"+PostID);
  }

  isLiked(Like:ILike){
    return this.http.post<any>(this.Url+"/isLiked",Like);
  }

  postLike(Like:ILike){
    return this.http.post<any>(this.Url,Like);
  }

  unlike(LikeID:string){
    return this.http.delete(this.Url+"/"+LikeID);
  }

  getLikeInfo(Like:ILike){
    return this.http.post<any>(this.Url+"/LikeData",Like);
  }
}
