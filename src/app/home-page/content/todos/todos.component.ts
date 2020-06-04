import { Component } from '@angular/core';
import {ITodo} from './interfaces/todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  title = 'Todo list';
  todos: ITodo[] = [];

  addTodo(value: string) {
    this.todos = [
      {
        id: Date.now(),
        value,
        isDone: false,
        isRemoved: false,
        isEdited: false
      },
      ...this.todos
    ];
  }
}
