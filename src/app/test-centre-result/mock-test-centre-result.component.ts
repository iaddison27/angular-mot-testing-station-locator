import { Component, Input } from '@angular/core';
import { TestCentreResult } from '../model/test-centre-result.interface';

@Component({
  selector: 'test-centre-result',
  template: ''
})
export class MockTestCentreResultComponent {

  @Input()
  public result: TestCentreResult;

}
