import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// 1. IMPORT the component you want to use
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true, // This property marks it as a standalone component
  // 2. ADD the component to the 'imports' array
  imports: [CommonModule, RouterOutlet, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-todo-app';
}
