import { Component } from '@angular/core';

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
export class AppComponent {
 posts: Post[] = [
   {title: 'Хочу вивчити Angular компоненти', text: 'я все ще вчу компоненти', id:1 },
   {title: 'Наступний блок', text: 'Буде про директиви і про пайпи', id:2 }

 ]
}

