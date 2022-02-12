import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  arr = [1, 1, 2, 3, 5, 8, 13]
  objs = [
    {title: 'Post 1', author: 'Yuriy', comments:[
        {name:'Max', text: 'lorem1'},
        {name:'Max', text: 'lorem2'},
        {name:'Max', text: 'lorem3'},
      ]},
    {title: 'Post 2', author: 'Yuriy 2', comments:[
        {name:'Max 2', text: 'lorem1'},
        {name:'Max 2', text: 'lorem2'},
        {name:'Max 2', text: 'lorem3'},
      ]}
  ]
}

