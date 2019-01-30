import { TestBed } from '@angular/core/testing';
import { NameSearchService } from './name-search.service';
import { TestCentre } from './model/test-centre.interface';
import { aTestCentre } from './test-helpers';

describe('name-search.service.spec.ts - NameSearchService', () => {

  let serviceUnderTest: NameSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NameSearchService
      ]
    });
    serviceUnderTest = TestBed.get(NameSearchService);
  });

  it('should filter results based on search term', () => {
    const centres: TestCentre[] = [
      aTestCentre('X', 'Garage 1', []),
      aTestCentre('Y', 'Car Menders', []),
      aTestCentre('Z', 'Test Centre A', [])
    ];

    const results: TestCentre[] = serviceUnderTest.searchByName(centres, 'ar');
    expect(results.length).toBe(2);
    expect(results[0].name).toBe('Garage 1');
    expect(results[1].name).toBe('Car Menders');
  });

});
