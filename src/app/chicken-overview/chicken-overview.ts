import { input, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Chicken } from '../types/chicken.js';

@Component({
  selector: 'app-chicken-overview',
  imports: [RouterModule],
  templateUrl: './chicken-overview.html',
  styleUrl: './chicken-overview.css',
})
export class ChickenOverview {
  currentChicken = input.required<Chicken>();
}
