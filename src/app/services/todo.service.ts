import { Injectable } from '@angular/core';

import Todo from './../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    new Todo('Learning Angular', true),
    new Todo('Pracicing Angular', false),
    new Todo('Read Angular', false)
  ];

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
