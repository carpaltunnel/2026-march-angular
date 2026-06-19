import { Component, inject, signal } from '@angular/core';
import { Chicken } from '../types/chicken.js';
import { ChickensService } from '../chickens.service.js';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CONSTANTS } from '../constants.js';

@Component({
  selector: 'app-chicken-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './chicken-edit.html',
  styleUrl: './chicken-edit.css',
})
export class ChickenEdit {
  chickensService: ChickensService = inject(ChickensService);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  currentChicken = signal<Chicken>(CONSTANTS.EMPTY_CHICKEN);
  chickenId: string;
  //
  // Marked as !optional/nullable! to make typescript happy
  //  ... acceptable in certain situations but generally bad practice
  chickenForm!: FormGroup;

  constructor() {
    this.chickenId = this.route.snapshot.params['id'];
    this.chickensService.getChickenById(this.chickenId)
      .then((chickenData) => {
        this.currentChicken.set(chickenData);

        this.chickenForm = new FormGroup({
          name: new FormControl(this.currentChicken().name),
          breed: new FormControl(this.currentChicken().breed),
          color: new FormControl(this.currentChicken().color),
          weight: new FormControl(this.currentChicken().weight),
        });
      });
  }

  async saveChicken(): Promise<void> {
    const updateChicken: Chicken = {
      id: this.currentChicken().id,
      imageUrl: this.currentChicken().imageUrl,
      ...this.chickenForm?.value
    };
    await this.chickensService.updateChicken(this.chickenId, updateChicken);

    // Redirect to main page / chicken listing
    this.router.navigate(['']);
  }
}
