import { Injectable } from '@angular/core';
import { BlogService } from 'blog-lib';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/operators';
import { Article } from 'blog-lib';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MyBlogService implements BlogService {
  getArticles() {
    return of([
      {
        title: 'Le poker : un jeu de probabilités ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src:
            'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
        },
        slug: 'titre-1',
        filePath: '/assets/article-1.md'
      },
      {
        title: 'Le pokzerzrz ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src:
            'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
        },
        slug: 'rzerezrezrez-1',
        filePath: '/assets/article-1.md'
      }
    ]);
  }

  getArticleBySlug(slug: string): Observable<Article> {
    return this.getArticles().pipe(
      map((articles: Article[]) => {
        return articles.filter(article => article.slug === slug);
      }),
      map((articles: Article[]) => {
        return articles.length === 1 ? articles[0] : null;
      })
    );
  }
}
