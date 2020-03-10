import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return [
      {
        code: 'co',
        country: 'Colombia',
        city: 'bogota',
        osApp: 'com.pagatodo.yawallet-V1.0.9',
        event: 'login',
        lat: 4.6412338,
        lng: -74.0707135
      },
      {
        code: 'mx',
        country: 'México',
        city: 'cdmx',
        osApp: 'com.pagatodo.yawallet-V0.0.9',
        event: 'login',
        lat: 4.599403153,
        lng: -74.13453088
      },
      {
        code: 'ar',
        country: 'Argentina',
        city: 'buenos_aires',
        osApp: 'com.pagatodo.yawallet-V1.1.2',
        event: 'compra_kit',
        lat: 4.599768333,
        lng: -74.13317833
      },
      {
        code: 'co',
        country: 'Colombia',
        city: 'bogota',
        osApp: 'com.pagatodo.yawallet-V1.0.9',
        event: 'adquirencia_money_in',
        lat: 4.6412323,
        lng: -74.0707087
      }
    ];
  }
}
