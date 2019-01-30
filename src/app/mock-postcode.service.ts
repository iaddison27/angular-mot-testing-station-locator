import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LatLng } from './model/lat-lng.interface';

@Injectable()
export class MockPostcodeService {

  public getLatLng(postcode: string): Observable<LatLng> {
    return undefined;
  }
}
