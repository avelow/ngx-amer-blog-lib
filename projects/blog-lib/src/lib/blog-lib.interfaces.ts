import {Observable} from "rxjs/internal/Observable";

export interface BlogService {
  loadArticles(): Observable<boolean>;
  getArticles(): Article[];
  setCurrentArticle(Article): void;
  getCurrentArticle(): Article;
}

export interface Article {
  title: string;
  publishedDate: string;
  cover: Image;
  slug: string;
  filePath: string;
}

export interface Image {
  src: string;
  alt: string;
}
