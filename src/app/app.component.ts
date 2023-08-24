import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<main>
  <header class="brand-name">
    <img class="brand-logo" src="https://static.vecteezy.com/system/resources/thumbnails/008/075/444/small/the-logo-of-home-housing-residents-real-estate-with-a-concept-that-presents-rural-nature-with-a-touch-of-leaves-and-sunflowers-vector.jpg" alt="logo" aria-hidden="true">
  </header>
  <section class="content">
    <app-home></app-home>
  </section>
</main>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}
