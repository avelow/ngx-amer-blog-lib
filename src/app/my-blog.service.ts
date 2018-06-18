import { Injectable } from '@angular/core';
import {BlogService} from 'blog-lib';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class MyBlogService implements BlogService {

  constructor() { }

  getArticles() {
    return of([
      {
        title: 'Le poker : un jeu de probabilités ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src: 'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg',
        },
        slug: 'titre-1',
        filePath: 'no-file',
      }, {
        title: 'Le pokzerzrz ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src: 'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg',
        },
        slug: 'rzerezrezrez-1',
        filePath: 'no-file',
      },
    ]);
  }

  setCurrentArticle(article) {
  }

  getCurrentArticle() {
    return {
      title: 'Le poker : un jeu de probabilités ou de chances ?',
      publishedDate: '10/10/10',
      cover: {
        alt: 'alt',
        src: 'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg',
      },
      slug: 'titre-1',
      filePath: 'no-file',
    };
  }
}
