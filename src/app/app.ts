import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChickenDetails } from "./chicken-details/chicken-details";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChickenDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ArCA Chickens!');
}
