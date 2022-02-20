import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Хочу вивчити Angular компоненти', text: 'я все ще вчу компоненти', id: 1},
    {title: 'Наступний блок', text: 'Буде про директиви і про пайпи', id: 2}

  ]
  ngOnInit(): void {
    // setTimeout( () => {
    //   console.log('Timeout')
    //   this.posts[0] = {
    //     title: 'Changed',
    //     text:'changed2',
    //     id:33
    //   }
    //   }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    console.log('It do remove', id)
    this.posts = this.posts.filter(p => p.id !== id)
  }
}

