
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { map, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TestCentreResult } from '../model/test-centre-result.interface';
import { TestCentre } from '../model/test-centre.interface';

@Component({
  selector: 'name-search',
  template: ''
})
export class MockNameSearchComponent {

  public model: any;

  @Input()
  public centres: TestCentre[];

  @Output()
  public selected = new EventEmitter<TestCentreResult>();

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.centres.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
        .slice(0, 10)
    ),)

  public formatter(result: TestCentre): TestCentre {
    return undefined;
  }

  public select($event: NgbTypeaheadSelectItemEvent): void {
    // Stub
  }

}
