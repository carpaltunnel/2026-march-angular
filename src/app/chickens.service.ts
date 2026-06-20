import { inject, Service } from '@angular/core';
import { Chicken } from './types/chicken.js';
import { CHICKENS } from './mock-data/mock-chickens.js';
import { HttpClient } from '@angular/common/http';

@Service()
export class ChickensService {
  private http = inject(HttpClient);
  baseUrl = '/api/v1/chickens';
  chickens: Chicken[] = CHICKENS;

  async getChickens(): Promise<Chicken[]> {
    const data = await fetch(this.baseUrl);
    return await data.json();
  }

  async getChickenById(id: string): Promise<Chicken> {
    const data = await fetch(`${this.baseUrl}/${id}`);
    return await data.json();
  }

  deleteChicken(id: string): Promise<void> {
    // New Promise, to prevent race condition
    return new Promise((resolve) => {
      this.http.delete(`${this.baseUrl}/${id}`)
        .subscribe(() => {
          resolve();
        });
    });
  }

  updateChicken(id: string, updatedChicken: Chicken): Promise<void> {
    // New Promise, to prevent race condition
    return new Promise((resolve) => {
      this.http.patch(`${this.baseUrl}/${id}`, updatedChicken, {
        keepalive: true,
      })
        .subscribe(() => {
          resolve();
        });
    });
  }

  createChicken(newChicken: Chicken): Promise<void> {
    // New Promise, to prevent race condition
    return new Promise((resolve) => {
      // TODO: Multer ONLY accepts multipart form data
      // TODO: Multer ONLY accepts multipart form data
      // TODO: Multer ONLY accepts multipart form data
      // TODO: Multer ONLY accepts multipart form data
      this.http.post(this.baseUrl, newChicken, {
        keepalive: true,
      })
        .subscribe(() => {
          resolve();
        });
    });
  }
}
