import { Injectable } from '@angular/core';
import { ArticleModel } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getArticles(): ArticleModel[] {
    console.log("getArticles")
    return []
  }

  constructor() { }

  
}
