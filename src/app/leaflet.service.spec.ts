import { TestBed } from '@angular/core/testing';
import { Marker } from 'leaflet';
import { aPoint, aTestCentreResult } from './test-helpers';
import { LeafletService } from './leaflet.service';
import { TestCentreResult } from './model/test-centre-result.interface';


describe('leaflet.service.spec.ts - LeafletService', () => {

  let serviceUnderTest: LeafletService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LeafletService
      ]
    });
    serviceUnderTest = TestBed.get(LeafletService);
  });

  it('should return default options', () => {
    const options: object = serviceUnderTest.constructInitialOptions();
    expect(options['layers']).toBeDefined();
  });

  it('should construct a latLng point', () => {
    const point: any = serviceUnderTest.aLatLng(55, -1.5);
    expect(point.lat).toBe(55);
    expect(point.lng).toBe(-1.5);
  });

  it('should construct a marker with correct latitude and longitude', () => {
    const testCentreResult: TestCentreResult = aTestCentreResult('A', 'X', 10,  aPoint(56, -1.2));

    const marker: Marker = serviceUnderTest.aMarkerWithPopup(testCentreResult);
    expect(marker.getLatLng().lat).toBe(56);
    expect(marker.getLatLng().lng).toBe(-1.2);
  });
});
