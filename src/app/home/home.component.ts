import { HousingLocation } from './../housinglocation';
// import { Component } from '@angular/core';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import {Component,inject} from '@angular/core';
import { core } from '@angular/compiler';
import { HousingService } from '../housing.service';


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
    <app-housinglocation
    *ngFor="let housingLocation of housingLocationList"
    [housingLocation]="housingLocation"
    ></app-housinglocation>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly baseUrl = 'assets/images';
  housingLocationList: HousingLocation[] = ([])
  housingService:HousingService = inject(HousingService);
  constructor(){
    this.housingLocationList=this.housingService.getAllHousingLocations();
  }
}

