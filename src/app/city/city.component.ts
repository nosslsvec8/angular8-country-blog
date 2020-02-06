import { Component } from '@angular/core';
import {CountryService} from '../service/contry.sevice';
// import { FormBuilder } from '@angular/forms';

export interface City {
  id: number;
  country_id: number;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {
  public cities: City[] = [
    { id: 1, country_id: 1, title: 'London', desc: '' },
    { id: 2, country_id: 1, title: 'Liverpool', desc: '' },
    { id: 3, country_id: 2, title: 'Paris', desc: '' },
    { id: 4, country_id: 3, title: 'Madrid', desc: '' },
    { id: 5, country_id: 4, title: 'Berlin', desc: '' },
    { id: 6, country_id: 4, title: 'Munich', desc: '' },
    { id: 7, country_id: 4, title: 'Hamburg', desc: '' }
  ];

  public activeItem: City;
  public statusForm = false;
  public newTitle = '';
  public newDesc = '';

  constructor(
    private countryService: CountryService
  ) {}

  deleteCity(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.cities = this.cities.filter(t => t.id !== id);
    }
  }

  editCity(activeItem: City): void {
    if (this.activeItem === activeItem) {
      this.activeItem = null;
    } else {
      this.activeItem = activeItem;
    }
  }

  editTitle(id: number, event: any): void {
    this.cities[id].title = event.target.value;
  }

  editDesc(id: number, event: any): void {
    this.cities[id].desc = event.target.value;
  }

  getCurrentCountry() {
    return this.countryService.currentCountry;
  }

  getAddStatus() {
    return this.statusForm;
  }

  changeStatusForm(): void {
    (this.statusForm === true) ? this.statusForm = false : this.statusForm = true;
  }

  addCity() {
    const newCity: City = {
      id: this.cities.length + 1,
      country_id: this.getCurrentCountry(),
      title: this.newTitle,
      desc: this.newDesc
    };

    this.newTitle = '';
    this.newDesc = '';

    this.cities.push(newCity);
    this.changeStatusForm();
  }
}
