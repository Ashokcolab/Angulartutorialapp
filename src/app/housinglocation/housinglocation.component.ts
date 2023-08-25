import { HousingLocation } from './../housinglocation';
import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-housinglocation',
  template:`
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  </section>
  `,
  styleUrls: ['./housinglocation.component.css']
})
export class HousinglocationComponent {
  @Input() housingLocation!:HousingLocation;

}
