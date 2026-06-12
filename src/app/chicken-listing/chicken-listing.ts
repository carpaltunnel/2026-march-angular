import { Component } from '@angular/core';
import { Chicken } from '../types/chicken.js';
import { CHICKENS } from '../mock-data/mock-chickens.js';
import { ChickenOverview } from '../chicken-overview/chicken-overview.js';

@Component({
  selector: 'app-chicken-listing',
  imports: [ChickenOverview],
  templateUrl: './chicken-listing.html',
  styleUrl: './chicken-listing.css',
})
export class ChickenListing {
  chickens: Chicken[] = CHICKENS;
}
