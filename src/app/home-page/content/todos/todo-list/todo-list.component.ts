import {Component, Input} from '@angular/core';
import {ITodo} from '../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() tasks: ITodo[];
}
