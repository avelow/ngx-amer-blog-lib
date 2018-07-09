import { Article, BlogService } from '../lib/blog-lib.interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

export class FakeBlogService implements BlogService {
  getArticleBySlug(slug: string): Observable<Article> {
    return of({
      author: 'Auteur',
      title: 'Le poker : un jeu de probabilités ou de chances ?',
      publishedDate: '10/10/10',
      cover: {
        alt: 'alt',
        src:
          'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
      },
      slug: 'titre-1',
      filePath: 'no-file-1'
    });
  }

  getArticles() {
    return of([
      {
        author: 'Auteur',
        title: 'Le poker : un jeu de probabilités ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src:
            'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
        },
        slug: 'titre-1',
        filePath: 'no-file-1'
      },
      {
        author: 'Auteur',
        title: 'Le pokzerzrz ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src:
            'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg'
        },
        slug: 'titre-2',
        filePath: 'no-file-1'
      }
    ]);
  }
}
