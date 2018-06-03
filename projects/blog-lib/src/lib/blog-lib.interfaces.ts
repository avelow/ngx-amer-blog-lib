// TODO 01/06/18 : define interface for entity and for service
// Check how to use provider id to inject service to load articles, get all articles, set/get current article
import {Observable} from "rxjs/internal/Observable";

export interface BlogService {
  loadArticles(): Observable<boolean>;
  getArticles(): Article[];
  setCurrentArticle(Article): void;
  getCurrentArticle(): Article;
}

export interface Article {

}
