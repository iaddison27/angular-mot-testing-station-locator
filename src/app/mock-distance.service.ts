import { Injectable } from '@angular/core';
import { LatLng } from './model/lat-lng.interface';

@Injectable()
export class MockDistanceService {

  public calculateDistance(point1: LatLng, point2: LatLng): number {
    return undefined;
  }

}
