import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoaderService } from './loader.service';
import { TestCentre } from './model/test-centre.interface';
import { aTestCentre } from './test-helpers';

describe('loader.service.spec.ts - LoaderService', () => {

  let serviceUnderTest: LoaderService;
  let mockHttpClient: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        LoaderService
      ]
    });
    serviceUnderTest = TestBed.get(LoaderService);
    mockHttpClient = TestBed.get(HttpTestingController);
  }));

  it('should return results', () => {
    serviceUnderTest.getCentres().subscribe();

    const response: TestCentre[] = aLoadResponse();
    mockHttpClient.expectOne('/assets/test-centres.json').flush(response);
  });

  function aLoadResponse():  TestCentre[] {
    return [aTestCentre('X', 'Y', [])];
  }

});
