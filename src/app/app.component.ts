import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { TestCentre } from './model/test-centre.interface';
import { TestCentreResult } from './model/test-centre-result.interface';
import { SearchService } from './search.service';
import { LatLng } from './model/lat-lng.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [LoaderService, SearchService] // TODO: Do we need to inject these providers?
})
export class AppComponent implements OnInit {

  private _centres: TestCentre[];
  private _results: TestCentreResult[];

  private _mapCentre: LatLng = {
    latitude: 55,
    longitude: -2
  };

  constructor(private _loaderService: LoaderService) {
  }

  public ngOnInit(): void {
    // TODO: cache subscription so we can unsubscribe when destroyed
    this._loaderService.getCentres().subscribe((centres: TestCentre[]) => {
      this._centres = centres;
    });
  }

  public onResultsChange(newResults: TestCentreResult[]): void {
    this._results = newResults;
  }

  public onMapCentreChange(newMapCentre: LatLng): void {
    this._mapCentre = newMapCentre;
  }

  get centres(): TestCentre[] {
    return this._centres;
  }

  get results(): TestCentreResult[] {
    return this._results;
  }

  get mapCentre(): LatLng {
    return this._mapCentre;
  }

}
