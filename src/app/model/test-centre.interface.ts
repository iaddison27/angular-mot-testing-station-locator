import { Address } from './address.interface';

export interface TestCentre {
  vtsSite: string;
  name: string;
  address: Address;
  classes: number[];
}
