import { Component, OnInit } from '@angular/core';
import {Article} from "./blog-lib.interfaces";

@Component({
  selector: 'amer-blog-lib',
  templateUrl: './blog-lib.component.html',
  styleUrls: ['./blog-lib.component.scss'],
})
export class BlogLibComponent implements OnInit {

  articles: Article[] = [];

  constructor() { }

  ngOnInit() {

    this.articles = [
      {
        title: 'Le poker : un jeu de probabilités ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src: 'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg',
        },
        slug: 'titre-1',
        filePath: 'no-file',
      },{
        title: 'Le pokzerzrz ou de chances ?',
        publishedDate: '10/10/10',
        cover: {
          alt: 'alt',
          src: 'https://gagnant-du-jour.com/wp-content/uploads/2018/04/poker-tournament-21.jpg',
        },
        slug: 'rzerezrezrez-1',
        filePath: 'no-file',
      },
    ]

  }

}
