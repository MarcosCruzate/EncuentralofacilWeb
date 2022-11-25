import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DistrictService {
  district: string;

  constructor() {
    this.district = 'Surco';
  }
}
