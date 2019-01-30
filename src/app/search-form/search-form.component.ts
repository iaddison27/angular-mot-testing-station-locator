import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchService } from '../search.service';
import { TestCentre } from '../model/test-centre.interface';
import { TestCentreResult } from '../model/test-centre-result.interface';
import { PostcodeService } from '../postcode.service';
import { LatLng } from '../model/lat-lng.interface';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers : [SearchService]
})
export class SearchFormComponent {

  @Input()
  public centres: TestCentre[];

  @Output()
  public resultsChange: EventEmitter<TestCentreResult[]> = new EventEmitter<TestCentreResult[]>();

  @Output()
  public mapCentreChange: EventEmitter<LatLng> = new EventEmitter<LatLng>();

  private _results: TestCentreResult[];

  constructor(private _searchService: SearchService, private _postcodeService: PostcodeService) {
  }

  public searchByPostcode($event) {
    this._postcodeService.getLatLng($event.postcode).subscribe((latLng: any) => {
      this.mapCentreChange.emit(latLng.result);
      this._results = this._searchService.search(this.centres, latLng.result, $event.searchRadius, $event.class);
      this.emitResults();
    });
  }

  public selectCentre(centre: TestCentreResult) {
    this._results = [centre];
    this.mapCentreChange.emit(centre.testCentre.address.latLng);
    this.emitResults();
  }

  private emitResults(): void {
    this.resultsChange.emit(this._results);
  }

}
