import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pic } from './pic/pic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Pic],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
