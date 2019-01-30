import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app.settings';
import { LatLng } from './model/lat-lng.interface';

@Injectable()
export class PostcodeService {

  constructor(private _httpClient: HttpClient) {}

  public getLatLng(postcode: string): Observable<LatLng> {
    return this._httpClient.get<LatLng>(AppSettings.POSTCODE_API_URL + postcode);
  }
}
