import { Injectable } from '@angular/core';
import { TestCentre } from '../model/test-centre.interface';

@Injectable()
export class MockNameSearchService {

  public searchByName(centres: TestCentre[], term: string): TestCentre[] {
    return undefined;
  }

}
