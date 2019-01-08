import { Component, OnInit } from '@angular/core';

import Todo from './../models/Todo';
import { TodoService } from './../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  // todos = [
  //   { text: 'Learning Angular', completed: false },
  //   { text: 'Practicing Angular', completed: false }
  // ];

  todos = this.todoService.getTodos();

  newTodo = '';

  completedStyles = {
    'color': 'gray',
    'text-decoration': 'line-through'
  };

  addTodo() {
    this.todos.push({ text: this.newTodo, completed: false});
    this.newTodo = '';
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  getCompleteTasks() {
    let n = 0;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed) {
        n++;
      }
    }
    return n;
  }

  ngOnInit() {
  }

}
