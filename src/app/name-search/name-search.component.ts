import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { TestCentreResult } from '../model/test-centre-result.interface';
import { TestCentre } from '../model/test-centre.interface';
import { NameSearchService } from '../name-search.service';

@Component({
  selector: 'name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.css']
})
export class NameSearchComponent {

  public model: any;

  @Input()
  public centres: TestCentre[];

  @Output()
  public selected = new EventEmitter<TestCentreResult>();

  constructor(private _nameSearchService: NameSearchService) {

  }

  search = (text$: Observable<string>) =>
    text$
    .debounceTime(200)
    .distinctUntilChanged()
    .map((term: string) => {
      if (term.length < 2) {
        return [];
      } else {
        return this._nameSearchService.searchByName(this.centres, term);
        //return this.centres.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      }
    })

  public formatter(result: TestCentre): string {
    return result.name;
  }

  public select($event: NgbTypeaheadSelectItemEvent): void {
    this.selected.emit({
      testCentre: $event.item,
      distanceKm: undefined
    });
  }

}
