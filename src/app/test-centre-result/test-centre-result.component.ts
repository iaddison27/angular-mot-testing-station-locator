import { Component, Input } from '@angular/core';
import { TestCentreResult } from '../model/test-centre-result.interface';

@Component({
  selector: 'test-centre-result',
  templateUrl: './test-centre-result.component.html',
  styleUrls: ['./test-centre-result.component.css']
})
export class TestCentreResultComponent {

  @Input()
  public result: TestCentreResult;

}
