import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChickenDetails } from './chicken-details/chicken-details.js';
import { ChickenListing } from './chicken-listing/chicken-listing.js';
import { ChickenOverview } from './chicken-overview/chicken-overview.js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChickenDetails, ChickenListing, ChickenOverview],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ArCA Chickens!');
}
