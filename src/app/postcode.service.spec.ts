import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestCentre } from './model/test-centre.interface';
import { PostcodeService } from './postcode.service';
import { aTestCentre } from './test-helpers';

describe('postcode.service.spec.ts - PostcodeService', () => {

  let serviceUnderTest: PostcodeService;
  let mockHttpClient: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PostcodeService
      ]
    });
    serviceUnderTest = TestBed.get(PostcodeService);
    mockHttpClient = TestBed.get(HttpTestingController);
  }));

  it('should return results', () => {
    serviceUnderTest.getLatLng('SW1 1TT').subscribe();

    const response: TestCentre[] = aLoadResponse();
    mockHttpClient.expectOne('http://api.postcodes.io/postcodes/SW1 1TT').flush(response);
  });

  function aLoadResponse():  TestCentre[] {
    return [aTestCentre('X', 'Y', [])];
  }

});
