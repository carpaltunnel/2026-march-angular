import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Chicken } from '../types/chicken.js';
import { CHICKENS } from '../mock-data/mock-chickens.js';
import { ChickenOverview } from '../chicken-overview/chicken-overview.js';
import { ChickensService } from '../chickens.service.js';


@Component({
  selector: 'app-chicken-listing',
  imports: [ChickenOverview, RouterModule],
  templateUrl: './chicken-listing.html',
  styleUrl: './chicken-listing.css',
})
export class ChickenListing {
  chickensService: ChickensService = inject(ChickensService);
  chickens: Chicken[] = [];
  
  constructor() {
    this.chickensService.getChickens()
      .then((chickensData) => {
        this.chickens = chickensData;
      });
  }

  async ngOnInit() {
    console.log('ngOnInit');
  }
}
