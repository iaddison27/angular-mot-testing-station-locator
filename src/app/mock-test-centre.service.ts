import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TestCentre } from './model/test-centre.interface';

@Injectable()
export class MockTestCentreService {

  public getCentres(): Observable<TestCentre[]> {
    return undefined;
  }

}
