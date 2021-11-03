import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos-panel',
  templateUrl: './todos-panel.component.html',
  styleUrls: ['./todos-panel.component.css'],
})
export class TodosPanelComponent implements OnInit, OnDestroy {
  todos: Todo[];
  currentDisplayTodo: Todo;
  todoSub: Subscription;
  progressForm: FormGroup;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoSub = this.todoService.todosSubject$.subscribe((payload) => {
      this.todos = payload;
    });
    this.progressForm = new FormGroup({
      updateProgress: new FormControl('', Validators.required),
    });
    this.todoService.getAllTodos();
  }

  onDisplayTodo(todo: Todo) {
    // console.log(todo);
    this.currentDisplayTodo = todo;
  }

  onUpdateTodoProgress() {
    const { updateProgress } = this.progressForm.value;
    this.todoService.updateTodoProgress(
      updateProgress,
      this.currentDisplayTodo._id
    );
  }

  onDeleteTodo() {
    
  }

  ngOnDestroy() {
    this.todoSub.unsubscribe();
  }
}
