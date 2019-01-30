import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TestCentre } from './model/test-centre.interface';

@Injectable()
export class MockTestCentreService {

  public getCentres(): Observable<TestCentre[]> {
    return undefined;
  }

}
