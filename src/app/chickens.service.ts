import { inject, Service } from '@angular/core';
import { Chicken } from './types/chicken.js';
import { CHICKENS } from './mock-data/mock-chickens.js';
import { HttpClient } from '@angular/common/http';

@Service()
export class ChickensService {
  private http = inject(HttpClient);
  baseUrl = '/api/v1/chickens';
  chickens: Chicken[] = CHICKENS;
  emptyChicken: Chicken = {
    id: '',
    name: '',
    weight: 0,
    breed: '',
    color: '',
  };

  async getChickens(): Promise<Chicken[]> {
    const data = await fetch(`${this.baseUrl}`);
    return await data.json();
  }

  getChickenById(id: string): Chicken {
    return this.chickens.find(c => c.id === id) || this.emptyChicken;
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

  async createChicken(newChicken: Chicken): Promise<void> {
    // New Promise, to prevent race condition
    return new Promise((resolve) => {
      this.http.post(this.baseUrl, newChicken, {
        keepalive: true,
      })
        .subscribe((data) => {
          console.log(data);
          resolve();
        });
    });
  }
}
