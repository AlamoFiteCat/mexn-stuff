import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  todoForm: FormGroup;
  maxDescriptionLength = 254;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.todoForm = new FormGroup({
      todoTitle: new FormControl('', Validators.required),
      todoDescription: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxDescriptionLength),
      ]),
      todoDate: new FormControl('')
    });
  }

  onSubmitForm() {
    const {todoTitle, todoDescription, todoDate} = this.todoForm.value;
    this.todoService.createNewTodo(todoTitle, todoDescription, todoDate);
    this.todoForm.reset();
  }
}
