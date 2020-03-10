import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: []
})
export class MapComponent implements OnInit {

  data: any[];

  filteredData: any[];

  zoom = 4;

  country: string;
  city: string;
  osApp: string;
  event: string;

  position = {
    lat: 16.2557437,
    lng: -93.3760401
  };

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
    this.filteredData = this.dataService.getData();
  }

  countrySelected( event ) {
    this.country = event.target.value;
    this.filter();
  }

  citySelected( event ) {
    this.city = event.target.value;
    this.filter();
  }

  osAppSelected( event ) {
    this.osApp = event.target.value;
    this.filter();
  }

  eventSelected( event ) {
    this.event = event.target.value;
    this.filter();
  }

  filter() {
    this.filteredData =
        this.data.filter(this.filterCountries)
                 .filter(this.filterCities)
                 .filter(this.filterOsApp)
                 .filter(this.filterEvent);
  }

  filterCountries = ( data ) => {
    if ( this.country ) {
      return data.code === this.country;
    } else {
      return data;
    }
  }

  filterCities = ( data ) => {
    if ( this.city ) {
      return data.city === this.city;
    } else {
      return data;
    }
  }

  filterOsApp = ( data ) => {
    if ( this.osApp ) {
      return data.osApp === this.osApp;
    } else {
      return data;
    }
  }

  filterEvent = ( data ) => {
    if ( this.event ) {
      return data.event === this.event;
    } else {
      return data;
    }
  }

}
