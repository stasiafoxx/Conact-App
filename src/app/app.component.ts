import { Component } from '@angular/core';
import { TODOS } from './mock-todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Day 1';
  sample = 'Another variable';
}
