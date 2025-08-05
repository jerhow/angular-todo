import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {
  newTodo: string = '';

  todos: string[] = [
    'Learn Angular',
    'Build a To-Do App',
    'Push to GitHub'
  ];

  addTodo() {
    // Only add the item if the input isn't empty
    if (this.newTodo.trim().length) {
      this.todos.push(this.newTodo);
      // Clear the input box after adding
      this.newTodo = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
