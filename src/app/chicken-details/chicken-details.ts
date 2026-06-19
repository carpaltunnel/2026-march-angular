import { Component, inject } from '@angular/core';
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
  protected currentChicken: Chicken;

  constructor() {
    this.chickenId = this.route.snapshot.params['id'];
    this.currentChicken = this.chickensService.getChickenById(this.chickenId);
  }

  async deleteChicken() {
    await this.chickensService.deleteChicken(this.chickenId);
    this.router.navigate(['']);
  }
}
