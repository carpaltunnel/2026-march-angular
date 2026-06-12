import { Component, inject } from '@angular/core';
import { Chicken } from '../types/chicken.js';
import { CHICKENS } from '../mock-data/mock-chickens.js';
import { ChickenOverview } from '../chicken-overview/chicken-overview.js';
import { ChickensService } from '../chickens.service.js';

@Component({
  selector: 'app-chicken-listing',
  imports: [ChickenOverview],
  templateUrl: './chicken-listing.html',
  styleUrl: './chicken-listing.css',
})
export class ChickenListing {
  chickensService: ChickensService = inject(ChickensService);
  chickens: Chicken[];
  
  constructor() {
    this.chickens = this.chickensService.getChickens();
  }
}
