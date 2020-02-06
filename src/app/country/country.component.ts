import { Component } from '@angular/core';
import {CountryService} from '../service/contry.sevice';

export interface Country {
  id: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  public country: Country[] = [
    {
      id: 1,
      title: 'United Kingdom',
      text: 'The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, ' +
        'is a sovereign state in Europe.'
    },
    {
      id: 2,
      title: 'France',
      text: 'France, officially the French Republic, is a unitary sovereign state comprising territory in western Europe and' +
        ' several overseas regions and territories.'
    },
    {
      id: 3,
      title: 'Spain',
      text: 'Spain, officially the Kingdom of Spain, is a sovereign state located on the Iberian Peninsula in southwestern Europe.'
    },
    {
      id: 4,
      title: 'Germany',
      text: 'Germany, officially the Federal Republic of Germany, is a federal parliamentary republic in western - central Europe.'
    }
  ];

  constructor(private countryService: CountryService) {}

  getCurrentCountry() {
    return this.countryService.currentCountry;
  }

  updateCurrentCountry(id: number): void {
    this.countryService.updateCurrentCountry(id);
  }
}
