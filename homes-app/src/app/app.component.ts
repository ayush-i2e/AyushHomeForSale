import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';  // Import HomeComponent
import { RouterLink, RouterOutlet } from '@angular/router';  // Import RouterLink and RouterOutlet
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterOutlet],  // Include RouterLink and RouterOutlet
  template: `
    <main>
      <a [routerLink]="['/']">  <!-- Navigates to the home route -->
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>  <!-- Where routed components will render -->
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
 