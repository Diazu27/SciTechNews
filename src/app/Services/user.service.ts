import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Url = "https://scitechnewsapi-production.up.railway.app/user"
  constructor(private http: HttpClient) { }


  getUserByID(UserID:string|null){
    return this.http.get(this.Url+"/"+UserID);
  }

  AuthUser(Email:string, Password:string){
    return this.http.post<any>(this.Url+"/auth",{email:Email, password:Password})
  }
}
