import { Component, OnInit } from '@angular/core';

import Todo from './../models/Todo';
import { TodoService } from './../services/todo.service';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.css']
})
export class ProductOneComponent {

  constructor(private todoService: TodoService) { }

  todos: Todo[] = this.todoService.getTodos();
  todoText = '';

  deleteTodo(id: number) {
    this.todos.splice(id, 1);
  }

  add() {
    this.todoService.addTodo(new Todo(this.todoText, false));
  }

}
