import {Component, Input} from '@angular/core';
import {Article} from "../../model/article.entity";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  title = 'Project';

  @Input() articles: Array<Article> = [];
}
