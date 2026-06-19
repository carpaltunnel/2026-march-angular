import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Chicken } from '../types/chicken.js';
import { ChickensService } from '../chickens.service.js';
import { CONSTANTS } from '../constants.js';

@Component({
  selector: 'app-chicken-details',
  imports: [RouterModule],
  templateUrl: './chicken-details.html',
  styleUrl: './chicken-details.css',
})
export class ChickenDetails {
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  chickensService: ChickensService = inject(ChickensService);
  chickenId: string;
  currentChicken = signal<Chicken>(CONSTANTS.EMPTY_CHICKEN);

  constructor() {
    this.chickenId = this.route.snapshot.params['id'];
    this.chickensService.getChickenById(this.chickenId)
      .then((chickenData) => {
        this.currentChicken.set(chickenData);
      });
  }

  async deleteChicken() {
    await this.chickensService.deleteChicken(this.chickenId);
    this.router.navigate(['']);
  }
}
