import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DistrictService {
  private _district = new BehaviorSubject<string>('Surco');
  district = this._district.asObservable();

  constructor() {}

  setDistrict(value: string) {
    this._district.next(value);
  }
}
