import { Injectable } from '@angular/core';
import { TestCentre } from './model/test-centre.interface';

@Injectable()
export class NameSearchService {

  public searchByName(centres: TestCentre[], term: string): TestCentre[] {
    return centres.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
  }

}
