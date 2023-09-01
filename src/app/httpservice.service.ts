import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleModel } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  

  constructor(private client: HttpClient) { }


  //Get
  getArticles():Observable<ArticleModel[]>{
    return this.client.get<ArticleModel[]>('http://localhost:3000/articles')

  }

  //Post
  addArticle(article: ArticleModel): Observable<ArticleModel[]> {
    return this.client.post<ArticleModel[]>('http://localhost:3000/articles', article);
  }


  //Update
  updateArticle(article: ArticleModel): Observable<any> {
    return this.client.put('http://localhost:3000/articles/' + article.id, article)
  }

  //Delete
  deleteArticle(id: number): Observable<any> {
    return this.client.delete('http://localhost:3000/articles/' + id)
  }






}
