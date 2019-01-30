import { TestBed } from '@angular/core/testing';
import { DistanceService } from './distance.service';
import { aPoint } from './test-helpers';
import { LatLng } from './model/lat-lng.interface';

describe('distance.service.spec.ts - DistanceService', () => {

  const POINT_A: LatLng = aPoint(55, -1);
  const POINT_B: LatLng = aPoint(56.123, -2.003);

  let serviceUnderTest: DistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DistanceService
      ]
    });
    serviceUnderTest = TestBed.get(DistanceService);
  });

  it('should return 0 when points have the same latitude and longitude', () => {
    const distanceBetween: number = serviceUnderTest.calculateDistance(POINT_A, POINT_A);
    expect(distanceBetween).toBe(0);
  });

  it('should calculate distance in miles between 2 points correctly', () => {
    const distanceBetween: number = serviceUnderTest.calculateDistance(POINT_A, POINT_B);
    expect(distanceBetween).toBe(86.9);
  });

});
