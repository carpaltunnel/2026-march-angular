import { Service } from '@angular/core';
import { Chicken } from './types/chicken.js';
import { CHICKENS } from './mock-data/mock-chickens.js';

@Service()
export class ChickensService {
  chickens: Chicken[] = CHICKENS;
  emptyChicken: Chicken = {
    id: '',
    name: '',
    weight: 0,
    breed: '',
    color: '',
  };

  getChickenById(id: string): Chicken {
    return this.chickens.find(c => c.id === id) || this.emptyChicken;
  }

  getChickens(): Chicken[] {
    return this.chickens;
  }

  deleteChicken(id: string): void {
    const previousSize = this.chickens.length;
    this.chickens = this.chickens.filter(c => c.id !== id);
    
    if (this.chickens.length === previousSize) {
      console.log(`Failed to delete id : ${id}`);
    } else {
      console.log(`Deleted chicken with id = ${id}`);
    }
  }

  updateChicken(id: string, updatedChicken: Chicken): void {
    const idx = this.chickens.findIndex(c => c.id === id);

    if (idx >= 0) {
      this.chickens[idx] = updatedChicken;
    }
  }
}
