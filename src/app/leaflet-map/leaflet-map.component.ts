import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TestCentreResult } from '../model/test-centre-result.interface';
import { LatLng } from '../model/lat-lng.interface';
import { LeafletService } from '../leaflet.service';

@Component({
  selector: 'leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit, OnChanges {

  @Input()
  public results: TestCentreResult[];

  @Input()
  public mapCentre: LatLng;

  private _layers: any = [];

  private _options: object;

  private _zoom: number = 5;

  private _centre: any;

  constructor(private _leafletService: LeafletService) {}

  public ngOnInit(): void {
    this._options = this._leafletService.constructInitialOptions();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.mapCentre) {
      this._centre = this._leafletService.aLatLng(this.mapCentre.latitude, this.mapCentre.longitude);
    }

    if (this.results) {
      this._zoom = 11;
      this.addMarkers();
    }
  }

  private addMarkers(): void {
    this._layers = [];
    for (const result of this.results) {
      this._layers.push(this._leafletService.aMarkerWithPopup(result));
    }
  }

  get options(): object {
    return this._options;
  }

  get layers(): any {
    return this._layers;
  }

  get zoom(): number {
    return this._zoom;
  }

  get centre(): any {
    return this._centre;
  }

}
