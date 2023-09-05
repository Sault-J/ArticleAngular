import { Component,  EventEmitter,  Input, Output } from '@angular/core';
import { ArticleModel } from './article.model';
import { EmptyExpr } from '@angular/compiler';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  
  
  @Output() delete: EventEmitter<any>  = new EventEmitter();

  @Output() update: EventEmitter<any>  = new EventEmitter();
  

  @Input()
  article: ArticleModel;
  constructor(){
    this.article = new ArticleModel('','',0)
  }

  public voteUp(): boolean {
    this.article.votes += 1
    return false;
  }

  public voteDown(): boolean {
    this.article.votes -= 1
    return false;
  }

  public deleteArticle(article: ArticleModel){
    this.delete.emit(article)
  }

  public selectArticle(article: ArticleModel){
    this.update.emit(article)
    
  }

  

}
