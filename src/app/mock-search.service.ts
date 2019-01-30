import { Injectable } from '@angular/core';
import { TestCentre } from './model/test-centre.interface';
import { LatLng } from './model/lat-lng.interface';
import { TestCentreResult } from './model/test-centre-result.interface';

@Injectable()
export class MockSearchService {

  public search(centres: TestCentre[], latLng: LatLng, searchRadius: number, motClass: number): TestCentreResult[] {
    return undefined;
  }

}
