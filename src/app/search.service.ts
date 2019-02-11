import { Injectable } from '@angular/core';

import { TestCentre} from './model/test-centre.interface';
import { LatLng } from './model/lat-lng.interface';
import { TestCentreResult } from './model/test-centre-result.interface';
import { DistanceService } from './distance.service';

@Injectable()
export class SearchService {

  constructor(private _distanceService: DistanceService) {}

  public search(centres: TestCentre[], latLng: LatLng, searchRadius: number, motClass: number): TestCentreResult[] {
    centres = this.filterByClass(centres, motClass);
    const results: TestCentreResult[] = this.filterByDistance(centres, latLng, searchRadius);
    this.sortByDistance(results);
    return results;
  }

  private filterByClass(centres: TestCentre[], motClass: number):  TestCentre[] {
    return centres.filter((centre: TestCentre) => this.hasClass(centre, motClass));
  }

  private filterByDistance(centres: TestCentre[], latLng: LatLng, searchRadius: number): TestCentreResult[] {
    const results: TestCentreResult[] = [];
    for (const centre of centres) {
      const distance: number = this._distanceService.calculateDistance(latLng, centre.address.latLng);
      if (distance < searchRadius) {
        results.push(this.createResult(centre, distance));
      }
    }
    return results;
  }

  private hasClass(centre: TestCentre, motClass: number): boolean {
    return centre.classes.indexOf(motClass) > -1;
  }

  private createResult(testCentre: TestCentre, distanceKm: number): TestCentreResult {
    return {
      testCentre,
      distanceKm
    };
  }

  private sortByDistance(results: TestCentreResult[]) {
    results.sort((a, b) => {
      return (a.distanceKm > b.distanceKm) ? 1 : ((b.distanceKm > a.distanceKm) ? -1 : 0);
    });
  }

}
