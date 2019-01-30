import { Injectable } from '@angular/core';
import { Marker } from 'leaflet';
import { TestCentreResult } from './model/test-centre-result.interface';

@Injectable()
export class MockLeafletService {

  public constructInitialOptions(): object {
    return undefined;
  }

  public aLatLng(latitude: number, longitude: number): any {
    return undefined;
  }

  public aMarkerWithPopup(result: TestCentreResult): Marker {
    return undefined;
  }

}
