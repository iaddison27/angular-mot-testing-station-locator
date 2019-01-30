import { TestCentre } from './model/test-centre.interface';
import { TestCentreResult } from './model/test-centre-result.interface';
import { LatLng } from './model/lat-lng.interface';

export function aTestCentre(vtsSite: string, name: string, classes: number[], latLng?: LatLng): TestCentre {
  return {
    vtsSite,
    name,
    address: {
      addressLines: [],
      postCode: undefined,
      telephone: undefined,
      latLng
    },
    classes
  };
}

export function aTestCentreResult(vtsSite: string, name: string, distanceKm: number, latLng?: LatLng): TestCentreResult {
  return {
    testCentre: aTestCentre(vtsSite, name, [], latLng),
    distanceKm
  };
}

export function aPoint(latitude: number, longitude: number): LatLng {
  return {
    latitude,
    longitude
  };
}
