import { Component } from '@angular/core';

export interface Country {
  id: number;
  title: string;
  text: string;
}

export interface City {
  id: number;
  country_id: number;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.global.scss']
})
export class AppComponent {

  public country: Country[] = [
    {
      id: 1,
      title: 'United Kingdom',
      text: 'The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe.'
    },
    {
      id: 2,
      title: 'France',
      text: 'France, officially the French Republic, is a unitary sovereign state comprising territory in western Europe and several overseas regions and territories.'
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

  public cities: City[] = [
      { id: 1, country_id: 1, title: 'London', desc: '' },
      { id: 2, country_id: 1, title: 'Liverpool', desc: '' },
      { id: 3, country_id: 2, title: 'Paris', desc: '' },
      { id: 4, country_id: 3, title: 'Madrid', desc: '' },
      { id: 5, country_id: 4, title: 'Berlin', desc: '' },
      { id: 6, country_id: 4, title: 'Munich', desc: '' },
      { id: 7, country_id: 4, title: 'Hamburg', desc: '' }
  ];

  clickCountryMenu(id: number, nameID: string) {
    const querySelector: string = '#' + nameID;
    if (document.querySelector('.country__menu__item_current')) {
      document.querySelector('.country__menu__item_current').classList
          .remove('country__menu__item_current');
    }
    document.querySelector(querySelector).classList.add('country__menu__item_current');
  }

  deleteCity(id: number) {
      if (confirm('Are you sure you want to delete?')) {
        this.cities = this.cities.filter(t => t.id !== id);
      }
  }

  editCity(name: string) {
    const querySelector: string = '#' + name + ' .cities__menu__item__changes';
    if (document.querySelector(querySelector).style.display !== 'block') {
      document.querySelector(querySelector).style.display = 'block';
    } else {
      document.querySelector(querySelector).style.display = 'none';
    }
  }

  intentionAddCity() {
    if (document.querySelector('.form_add_city_open').style.display !== 'block') {
      document.querySelector('.form_add_city_open').style.display = 'block';
      document.querySelector('.button_add_city').style.display = 'none';
      document.getElementById('city__new_input').value = '';
      document.getElementById('city__new_textarea').value = '';
    } else {
      document.querySelector('.form_add_city_open').style.display = 'none';
      document.querySelector('.button_add_city').style.display = 'block';
    }
  }

  addCity() {
    const newTitle = document.getElementById('city__new_input').value;
    const newDesc = document.getElementById('city__new_textarea').value;
    const countryCurrentStr = document.querySelector('.country__menu__item_current').id;

    const newContry: City = {
      id: this.cities.length + 1,
      country_id: Number(countryCurrentStr.slice(7, countryCurrentStr.length)),
      title: newTitle,
      desc: newDesc
    };

    this.cities.push(newContry);
    this.intentionAddCity();
  }

  editTitle(id: number, event: any) {
    this.cities[id].title = event.target.value;
  }

  editDesc(id: number, event: any) {
    this.cities[id].desc = event.target.value;
  }
}
