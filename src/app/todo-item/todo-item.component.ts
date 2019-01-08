import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import Todo from './../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  @Input() data: Todo;
  @Input() id: number;
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }

  delete() {
    // alert(this.id);
    this.deleteTodo.emit(this.id);
  }

}
