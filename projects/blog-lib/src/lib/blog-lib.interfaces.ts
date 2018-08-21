import { Observable } from 'rxjs/internal/Observable';

/**
 * Interface used to implement the service injected in the BlogLibModule providers
 */
export interface BlogService {
  getArticles(): Observable<Article[]>;
  getArticleBySlug(slug: string): Observable<Article>;
}

/**
 * Interface representing an article in the BlogLibModule.
 */
export interface Article {
  author: string;
  title: string;
  publishedDate: string;
  cover: Image;
  slug: string;
  filePath: string;
}

/**
 * Interface representing an image in the BlogLibModule.
 */
export interface Image {
  src: string;
  alt: string;
}
