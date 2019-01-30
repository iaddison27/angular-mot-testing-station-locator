import { Injectable } from '@angular/core';
import { icon, latLng, Marker, marker, tileLayer } from 'leaflet';
import { TestCentreResult } from './model/test-centre-result.interface';

@Injectable()
export class LeafletService {

  public constructInitialOptions(): object {
    return {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
      ]
    };
  }

  public aLatLng(latitude: number, longitude: number): any {
    return latLng(latitude, longitude);
  }

  public aMarkerWithPopup(result: TestCentreResult): Marker {
    return marker([result.testCentre.address.latLng.latitude, result.testCentre.address.latLng.longitude], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        popupAnchor: [0, -41],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }).bindPopup(
      // TODO: how to get this HTML from a template. ViewContainerRef.createComponent?
      `<h6>${result.testCentre.name}</h6>
      <div>
      <span>
      ${result.testCentre.address.addressLines[0]}<br/>
      </span>
      ${result.testCentre.address.postCode}<br/>
      ${result.testCentre.address.telephone}
      </div>
      <div>
      Classes Tested: ${result.testCentre.classes}
      </div>`);
  }

}
