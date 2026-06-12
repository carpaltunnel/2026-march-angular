import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Chicken } from '../types/chicken.js';
import { CHICKEN } from '../mock-data/mock-chicken.js';
import { CHICKENS } from '../mock-data/mock-chickens.js';

@Component({
  selector: 'app-chicken-details',
  imports: [RouterModule],
  templateUrl: './chicken-details.html',
  styleUrl: './chicken-details.css',
})
export class ChickenDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  chickenId: string;
  protected currentChicken: Chicken;

  constructor() {
    this.chickenId = this.route.snapshot.params['id'];
    this.currentChicken = CHICKENS.find(c => c.id === this.chickenId) || CHICKEN;
  }

  

}
