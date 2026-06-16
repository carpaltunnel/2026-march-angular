import { Component, inject } from '@angular/core';
import { Chicken } from '../types/chicken.js';
import { ChickensService } from '../chickens.service.js';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chicken-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './chicken-edit.html',
  styleUrl: './chicken-edit.css',
})
export class ChickenEdit {
  chickenService: ChickensService = inject(ChickensService);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  currentChicken: Chicken;
  chickenId: string;
  chickenForm: FormGroup;


  constructor() {
    this.chickenId = this.route.snapshot.params['id'];
    this.currentChicken = this.chickenService.getChickenById(this.chickenId);

    this.chickenForm = new FormGroup({
      name: new FormControl(this.currentChicken.name),
      breed: new FormControl(this.currentChicken.breed),
      color: new FormControl(this.currentChicken.color),
      weight: new FormControl(this.currentChicken.weight),
    });
  }

  saveChicken(): void {
    const updateChicken: Chicken = {
      id: this.currentChicken.id,
      imageUrl: this.currentChicken.imageUrl,
      ...this.chickenForm.value
    };
    this.chickenService.updateChicken(this.chickenId, updateChicken);
    
    // Redirect to main page / chicken listing
    this.router.navigate(['']);
  }
}
