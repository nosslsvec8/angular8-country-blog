import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  currentCountry = 1;

  updateCurrentCountry(id: number) {
    this.currentCountry = id;
  }
}
