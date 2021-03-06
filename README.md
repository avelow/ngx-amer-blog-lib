# BlogLib

Easy and fast way to create a blog with Angular.

## Getting Started

In a few word, to make this library work, you just have to code your sidebar template and a single service to expose the articles.

> This library is currently in development, don't use it in production.
> Breaking change may appear at each realese without telling it !

### Prerequisites

To make this library work you need to install the following dependencies :

```
npm install --save @angular/flex-layout
npm install --save ngx-amer-directives
npm install --save ngx-markdown
npm install --save simplebar
```

For simplebar, you will have to add some css et javascript dependencies.
Just add the following lines in your angular.json

```javascript
{
  "projects": {
    "your-app": {
      // ...,
      "architect": {
        "build": {
          // ...,
          "options": {
            // ...,
            "styles": [
              // ...,
              "node_modules/simplebar/dist/simplebar.min.css"
            ],
            "scripts": [
              // ...,
              "node_modules/simplebar/dist/simplebar.min.js"
            ]
          }
        }
      }
    }
  }
}
```

### Installing

Run the following command :

```
npm install --save ngx-amer-blog-lib
```

To use the Merriweather font, you have to add it to your application by adding this to your index.html

```html
<html>
  <head>
    <!-- ... -->
    <link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
  </head>
  <!-- ... -->
</html>
```

#### Defining the routes of the blog

Create an AppRoutingModule if you don't have one and give it the BLOG_ROUTES through the import of the RouterModule.

```typescript
import { BLOG_ROUTES } from 'blog-lib';

@NgModule({
  imports: [RouterModule.forRoot(BLOG_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

You can customize the path by redefining the routes.

```typescript
import { BLOG_ROUTES } from 'blog-lib';

const routes: Routes = [
  {
    path: 'my-path',
    children: BLOG_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

And then import the AppRoutingModule in the AppModule.

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    AppRoutingModule,
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### Defining the blog service

You have to implements the following interface and to give it to the BlogModule in the forRoot() method.

```typescript
interface BlogService {
  getArticles(): Observable<Article[]>;
  getArticleBySlug(slug: string): Observable<Article>;
}
```

```typescript
import { BlogLibModule, BLOG_SERVICE_TOKEN } from 'blog-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    BlogLibModule.forRoot({
      provide: BLOG_SERVICE_TOKEN,
      useClass: MyBlogService
    }),
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### Import the MakdownModule

You will have to import the MarkdownModule and the HttpClientModule to make the library work.

```typescript
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### Create the component in the AppComponent

Then you just have to create the amer-blog-lib component and to define your sidebar to make the blog work.

```html
<amer-blog-lib>
  <div sidebar>
    <!-- Your sidebar -->
  </div>
</amer-blog-lib>
```

#### Using your theme

To customize the color of the blog, you just have to include the configuration in your root scss file.
Advice : remove margin and padding for the html and body element.

```scss
html,
body {
  margin: 0 0;
  padding: 0 0;
  height: 100%;
}

@import '~@angular/material/theming';
@import '~blog-lib/theming';

@include mat-core();

$candy-app-primary: mat-palette($mat-indigo);
$candy-app-accent: mat-palette($mat-purple);
$candy-app-warn: mat-palette($mat-red);

$candy-app-theme: mat-light-theme(
  $candy-app-primary,
  $candy-app-accent,
  $candy-app-warn
);

@include angular-material-theme($candy-app-theme);
@include blog-lib-variables($candy-app-theme);
```

#### Add articles to the blog

You have to write your articles in markdown and you can put the files in the assets folder.
The path define in the Article entity start at the src/ folder.

## Contributing

The library is still in development. When it will be more stable, I may open it to contributing but not currently.

## Authors

- **Alexis Merceron** - _Passionate developer_ - [Github](https://github.com/avelow)
- **Quentin Lambert** - _Designer_ - [quentinlambert.com](https://quentinlambert.com/)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE.md](LICENSE.md) file for details
