import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleModel } from '../article/article.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  model = new ArticleModel('','',0)

  @Output() create: EventEmitter<any>  = new EventEmitter();

  public newArticle(article: ArticleModel){
    this.create.emit(article)
  }
  
  @Input()
  article: ArticleModel;
  constructor(){
    this.article = new ArticleModel('','',0)
  }

  

}
