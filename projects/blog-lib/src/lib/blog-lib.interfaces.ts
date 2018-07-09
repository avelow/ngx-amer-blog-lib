import { Observable } from 'rxjs/internal/Observable';

export interface BlogService {
  getArticles(): Observable<Article[]>;
  getArticleBySlug(slug: string): Observable<Article>;
}

export interface Article {
  author: string;
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
