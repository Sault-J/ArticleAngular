import { Component, Input, OnInit} from '@angular/core'
import { ArticleModel } from './article/article.model'
import { ArticleService } from './article.service'
import { HttpserviceService } from './httpservice.service'

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tp 7 Reddit (2)'
  
  articles: ArticleModel[]=[];

  updateOn: boolean = false
  selectedArticle: ArticleModel = new ArticleModel("","",0)

  

  constructor(private service: HttpserviceService){
    
  }

  /* //Replaced by CRUD -> Create
  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    console.log(`Adding article title: ${title.value} and link: ${link.value}`)
    this.articles.push(new ArticleModel(title.value, link.value, 0))
    title.value=''
    link.value= ''
    
    return false
  }
  */
  


  ngOnInit():void{
    this.getArticles()
  }

  sortedArticles(): ArticleModel[] {
    return this.articles.sort((a: ArticleModel, b: ArticleModel) => b.votes - a.votes)
  }


  //-------------------------------------------CRUD-----------------------------------------------

  //Get
  getArticles(){
    this.service.getArticles().subscribe(restArticles => this.articles = restArticles)
  }

  //Create
  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    console.log(`Adding article title: ${title.value} and link: ${link.value}`)
    this.service.addArticle(new ArticleModel(title.value, link.value))
    .subscribe(data => {
      this.getArticles()
    })
    location.reload()
    title.value=''
    link.value= ''
    
    return false
  }

  //Delete
  deleteArticle(id: number){
    this.service.deleteArticle(id).subscribe(data => {
      this.getArticles()
    })
  }

  //Update
  updateArticle(title: HTMLInputElement, link: HTMLInputElement, id: number){
    
    this.selectedArticle.title = title.value
    this.selectedArticle.link = link.value
    

    this.service.updateArticle(this.selectedArticle).subscribe(data => {
      this.getArticles()
    })
    
    
    }

    updateCheck(article: ArticleModel){
      this.updateOn = true
      this.selectedArticle = article
      
    }
  


}
