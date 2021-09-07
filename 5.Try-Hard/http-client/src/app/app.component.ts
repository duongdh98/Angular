import { Component } from '@angular/core';
import { 
  HttpClient, 
  HttpParams, 
  HttpHandler, 
  HttpHeaders 
} from '@angular/common/http';
import { Post } from './post';
import { Observable, of, Subject } from 'rxjs';

import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/retry'
import 'rxjs/add/observable/of'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http-client';
  readonly ROOT_URL='https://jsonplaceholder.typicode.com';

  // > 1 posts: Observable<Post[]>;

  // > 2 posts: Observable<any>;

  // > 3 posts: Observable<any>;

  posts: Observable<any>;
  newPosts: Observable<any>;


  constructor(private http: HttpClient) { 
  }

  getPosts() {
    // > 1 this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts');

    // > 2 this.posts = this.http.get(this.ROOT_URL + '/posts?userId=1');

    // > 3let params = new HttpParams().set('userId', '1');
    // > 3this.posts = this.http.get(this.ROOT_URL + '/posts', { params });

    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token');
    this.posts = this.http.get(this.ROOT_URL + '/posts', { params, headers });
  }

  createPost() {
    const data: Post = {
      id: 4,
      userId: 23,
      title: 'My new posts',
      body: 'Hwerkjhuiosdokh'
    }
    // > 4 this.newPosts = this.http.post<Post>(this.ROOT_URL + '/posts', data)
    // > 4 .pipe(map(post => post.title));
    this.newPosts = this.http.post(this.ROOT_URL + '/foo', data)
    .retry(3)
    .catch(err => {
      console.log(err)
      return Observable.of(err)
    });
  }

}
