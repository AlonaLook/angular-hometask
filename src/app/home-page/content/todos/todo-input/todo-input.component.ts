import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})

export class TodoInputComponent {
  @Output() onAddTask: EventEmitter<string> = new EventEmitter<string>();

  task = '';

  addTask() {
    const task = this.task.trim();

    if (task) {
      this.onAddTask.emit(task);

      this.task = '';
    }
  }
}
