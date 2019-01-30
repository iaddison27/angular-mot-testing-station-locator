import { LatLng } from './lat-lng.interface';

export interface Address {
  addressLines: string[];
  postCode: string;
  telephone: string;
  latLng: LatLng;
}
