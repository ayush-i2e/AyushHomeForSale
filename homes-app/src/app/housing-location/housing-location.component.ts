import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';  // Import RouterModule for routing
 
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Add RouterModule here
  template: `
<section class="listing">
<img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
<h2 class="listing-heading">{{ housingLocation.name }}</h2>
<p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
<a [routerLink]="['/details', housingLocation.id]">Learn More</a>  <!-- Use routerLink -->
</section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}