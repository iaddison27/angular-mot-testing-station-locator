import { Component, Input } from '@angular/core';
import { TestCentreResult } from '../model/test-centre-result.interface';
import { LatLng } from '../model/lat-lng.interface';

@Component({
  selector: 'results',
  template: ''
})
export class MockResultsComponent {

  @Input()
  public results: TestCentreResult[];

  @Input()
  public mapCentre: LatLng;

  public onPageChange(pageNumber: number): void {
    // Stub
  }

  get pageResults(): TestCentreResult[] {
    return undefined;
  }

  get pageSize(): number {
    return undefined;
  }

}
