import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppSettings } from './app.settings';
import { TestCentre } from './model/test-centre.interface';

@Injectable()
export class LoaderService {

  constructor(private _httpClient: HttpClient) {}

  public getCentres(): Observable<TestCentre[]> {
     return this._httpClient.get<TestCentre[]>(AppSettings.TEST_CENTRE_URL);
  }

}
