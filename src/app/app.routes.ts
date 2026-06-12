import { Routes } from '@angular/router';
import { ChickenListing } from './chicken-listing/chicken-listing.js';
import { ChickenDetails } from './chicken-details/chicken-details.js';

export const routes: Routes = [
  {
    path: '',
    component: ChickenListing,
    title: 'Chicken Listing'
  },
  {
    path: 'chickens/:id',
    component: ChickenDetails,
    title: 'Chicken Details'
  }
];
