import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestCentre } from '../model/test-centre.interface';
import { TestCentreResult } from '../model/test-centre-result.interface';

@Component({
  selector: 'search-form',
  template: ''
})
export class MockSearchFormComponent {

  @Input()
  public centres: TestCentre[];

  @Output()
  public resultsChange: EventEmitter<TestCentreResult[]> = new EventEmitter<TestCentreResult[]>();

  public searchByPostcode($event) {
    // Stub
  }

  public selectCentre(centre: TestCentreResult) {
    // Stub
  }

}
