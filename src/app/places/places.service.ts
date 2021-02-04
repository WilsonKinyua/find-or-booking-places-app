import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'South Africa',
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful',
      'https://images.pexels.com/photos/5683727/pexels-photo-5683727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      33.23
    ),
    new Place(
      'p2',
      'South Tokyo',
      'In the heart of all people in the world',
      'https://images.pexels.com/photos/3135801/pexels-photo-3135801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      26.98
    ),
    new Place(
      'p3',
      'South Asia',
      'I guess its a romantic place by maybe check',
      'https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      236.98
    ),
  ];

  get places() {
    return [...this._places];
  }
  constructor() {}
}
