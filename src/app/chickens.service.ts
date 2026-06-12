import { Service } from '@angular/core';
import { Chicken } from './types/chicken.js';
import { CHICKENS } from './mock-data/mock-chickens.js';

@Service()
export class ChickensService {
  emptyChicken: Chicken = {
    id: '',
    name: '',
    weight: 0,
    breed: '',
    color: '',
  };

  getChickenById(id: string): Chicken {
    return CHICKENS.find(c => c.id === id) || this.emptyChicken;
  }

  getChickens(): Chicken[] {
    return CHICKENS;
  }
}
