
// Import class so we can use it as dependency injection token in the constructor
import {TodoService} from '../todo.service';

@Component({
  // ...
})
export class TodoAppComponent {

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoService`
  // and assign it to a property called `todoService`
  constructor(private todoService: TodoService) {
  }

  // Service is now available as this.todoService
  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }
}

// Import class so we can register it as dependency injection token
import {TodoService} from '../todo.service';

@Component({
  // ...
  providers: [TodoService]
})
export class TodoAppComponent {
  // ...
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
