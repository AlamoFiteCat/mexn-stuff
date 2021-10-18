import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  constructor() {}

  @Input() currentTodo: Todo;
  @Output() displayTodo = new EventEmitter<Todo>();

  ngOnInit(): void {
    // console.log(this.currentTodo);
  }

  triggerDisplayTodo(todo: Todo) {
    this.displayTodo.emit(todo);
  }
}
