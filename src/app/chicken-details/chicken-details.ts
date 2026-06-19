import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Chicken } from '../types/chicken.js';
import { ChickensService } from '../chickens.service.js';

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
  // TODO: Replace with emptyChicken constant
  currentChicken = signal<Chicken>({
    id: '',
    name: '',
    breed: '',
    color: '',
    weight: 0,
  });

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
