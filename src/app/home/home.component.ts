import { Component } from '@angular/core';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';

@Component({
  selector: 'app-home',
  template:`
   <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housinglocation></app-housinglocation>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
