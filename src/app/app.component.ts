import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {IPost} from '../interfases/post.interface';
import {PostService} from './services/post.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  post: IPost;
  posts: IPost[] = [];
  isLoaded = false;
  error = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      comment: new FormControl('', [
        Validators.required
      ])
    });

    this.getPosts();
  }

  get title() {
    return this.form.get('title');
  }

  get isEmptyTitle() {
    return this.title.errors && this.title.errors.required && this.title.touched;
  }

  get comment() {
    return this.form.get('comment');
  }
  getPosts() {
    this.isLoaded = true;

    this.postService.fetchData().subscribe(posts => {
      this.isLoaded = false;
      this.posts = [...posts];
    },
      (err) => {
      this.error = err.message;
      });
  }

  addPost() {
    this.isLoaded = true;

    this.post = {
      title: this.title.value,
      comment: this.comment.value
    };
    this.postService.postData(this.post).subscribe(() => {
      this.getPosts();
    }, (err) => {
      this.error = err.message;
    });
    this.form.reset();
  }

  deletePosts() {
    this.isLoaded = true;
    this.postService.deleteAllData().subscribe(() => {
      this.postService.fetchData().subscribe(() => {
        this.isLoaded = false;
        this.posts = [];
      });
    }, (err) => {
      this.error = err.message;
    });
  }
}
