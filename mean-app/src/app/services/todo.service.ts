import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Title 1',
      progress: 10,
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 2,
      title: 'Title 2',
      progress: 30,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a.',
    },
    {
      id: 3,
      title: 'Title 3',
      progress: 75,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper et magna sit amet ornare.',
    },
    {
      id: 4,
      title: 'Title 4',
      progress: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a.',
    },
  ];

  constructor(private http: HttpClient) {}

  todosSubject$ = new Subject<Todo[]>();

  getAllTodos() {
    // return this.todos;
    this.http
      .get('http://localhost:3000/todos')
      .pipe(map((todos) => todos as Todo[]))
      .subscribe((payload: Todo[]) => {
        this.todosSubject$.next(payload);
      });
  }

  createNewTodo(title: string, description: string) {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      progress: 0,
      title: title,
      description: description,
    };
    this.http
      .post('http://localhost:3000/todos', newTodo)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
