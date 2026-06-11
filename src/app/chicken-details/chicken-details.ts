import { Component, signal } from '@angular/core';
import { CHICKEN } from '../mock-data/mock-chicken.js';

@Component({
  selector: 'app-chicken-details',
  imports: [],
  templateUrl: './chicken-details.html',
  styleUrl: './chicken-details.css',
})
export class ChickenDetails {
  protected readonly welcomeMessage = signal('Welcome to chicken-details component!');

  protected readonly currentChicken = CHICKEN;

}
