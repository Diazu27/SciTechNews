import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private Url = "https://scitechnewsapi-production.up.railway.app/category"
  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.Url);
  }
}
