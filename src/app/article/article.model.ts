export class ArticleModel {

    

        title: string
        link: string
        votes: number
        id!: number
    
        constructor(title: string, link: string, votes?: number){
            this.title = title;
            this.link = link;
            this.votes = votes || 0;
            
        }

        



        
  /* // ne fonctionne pas {this.article.voteUp is not a function} rustine dans => article.component.ts => voteUp() / voteDown() 
  public voteUp(){
    this.votes += 1;   
  }

  public voteDown(){
    this.votes -= 1;
  }
  */
    
    
    
}
