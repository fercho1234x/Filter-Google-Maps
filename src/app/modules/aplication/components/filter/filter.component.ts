import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: []
})
export class FilterComponent implements OnInit {

  title = 'Filters';

  position = {
    lat: -34.681,
    lng: -58.371
  };

  label = {
    color: 'blue',
    text: 'Aqui es un punto OP'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
