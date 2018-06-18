import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from '../../blog-lib.interfaces';

@Component({
  selector: 'amer-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent {

  /**
   * The list of articles
   */
  @Input() articles: Article[];

  /**
   * The open article event emitter
   */
  @Output() openArticle = new EventEmitter<Article>();

  /**
   * Emit an open article event
   */
  open(article: Article) {
    console.log(article);
    this.openArticle.emit(article);
  }

}
