import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-chicken-details',
  imports: [],
  templateUrl: './chicken-details.html',
  styleUrl: './chicken-details.css',
})
export class ChickenDetails {
  protected readonly welcomeMessage = signal('Welcome to chicken-details component!');

  protected readonly currentChicken = {
    id: '75974d26-bd05-4d9f-9dc6-7ce8413801aa',
    name: 'Chipotle',
    breed: 'Buff Orpington',
    weight: 3.1,
    color: 'Orange'
  };

}
