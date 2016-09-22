import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[map]',
  template: require('./map.html'),
  styles: [require('./map.css')]
})
export class MapPage {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() {}
}