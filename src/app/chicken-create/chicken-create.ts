import { Component, inject } from '@angular/core';
import { Chicken } from '../types/chicken.js';
import { ChickensService } from '../chickens.service.js';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-chicken-create',
  imports: [ReactiveFormsModule],
  templateUrl: './chicken-create.html',
  styleUrl: './chicken-create.css',
})
export class ChickenCreate {
  chickenService: ChickensService = inject(ChickensService);
  router: Router = inject(Router);
  newChickenForm: FormGroup;

  constructor() {
    this.newChickenForm = new FormGroup({
      name: new FormControl(''),
      breed: new FormControl(''),
      color: new FormControl(''),
      weight: new FormControl(0),
      imageUrl: new FormControl(''),
      chickenImage: new FormControl(null),
    });
  }

  async createChicken(): Promise<void> {
    const newChicken: Chicken = {
      ...this.newChickenForm.value
    };
    await this.chickenService.createChicken(newChicken);
    
    // Redirect to main page / chicken listing
    this.router.navigate(['']);
  }

  onFileSelected(event: Event){
    if (event?.target) {
      const element = event.target as HTMLInputElement;
      if (element?.files) {
        const file = element.files[0];
        this.newChickenForm.patchValue({ chickenImage: file });
      }
    }
  }
}
