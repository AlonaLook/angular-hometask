import {Component, Input} from '@angular/core';
import {ITodo} from '../../interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent {
  @Input() task: ITodo;

  toggleDone() {
    this.task.isDone = !this.task.isDone;
  }

  onRemove() {
    this.task.isRemoved = !this.task.isRemoved;
  }

  onEdit() {
    this.task.isEdited = !this.task.isEdited;
  }
}
