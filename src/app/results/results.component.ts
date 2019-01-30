import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TestCentreResult } from '../model/test-centre-result.interface';
import { LatLng } from '../model/lat-lng.interface';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnChanges {

  private _pageSize: number = 5;

  @Input()
  public results: TestCentreResult[];

  @Input()
  public mapCentre: LatLng;

  private _pageResults: TestCentreResult[];

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.results) {
      this.onPageChange(1);
    }
  }

  public onPageChange(pageNumber: number): void {
    this.updatePageResults(pageNumber);
  }

  private updatePageResults(currentPage: number): void {
    const startIndex: number = (currentPage - 1) * this._pageSize;
    const endIndex: number = startIndex + this._pageSize;
    this._pageResults = this.results.slice(startIndex, endIndex);
  }

  get pageResults(): TestCentreResult[] {
    return this._pageResults;
  }

  get pageSize(): number {
    return this._pageSize;
  }

}
