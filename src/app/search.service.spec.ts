import { async, TestBed } from '@angular/core/testing';
import { TestCentre } from './model/test-centre.interface';
import { SearchService } from './search.service';
import { DistanceService } from './distance.service';
import { MockDistanceService } from './mock-distance.service';
import { TestCentreResult } from './model/test-centre-result.interface';
import { aPoint, aTestCentre } from './test-helpers';

describe('search.service.spec.ts - SearchService', () => {

  let serviceUnderTest: SearchService;
  let mockDistanceService: DistanceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchService,
        {provide: DistanceService, useClass: MockDistanceService},
      ]
    });
    serviceUnderTest = TestBed.get(SearchService);
    mockDistanceService = TestBed.get(DistanceService);
  }));

  it('should return empty array when no results for supplied class', () => {
    const results: TestCentreResult[] = serviceUnderTest.search(centres(), aPoint(55, -1.6), 5, 3);
    expect(results.length).toBe(0);
  });

  it('should return empty array when no results within 200 miles', () => {
    spyOn(mockDistanceService, 'calculateDistance').and.returnValue(200);
    const results: TestCentreResult[] = serviceUnderTest.search(centres(), aPoint(55, -1.6), 5, 4);
    expect(results.length).toBe(0);
  });

  it('should return correct results sorted by distance ASC', () => {
    spyOn(mockDistanceService, 'calculateDistance').and.returnValues(3, 4, 5, 2, 4);
    const results: TestCentreResult[] = serviceUnderTest.search(centres(), aPoint(55, -1.6), 5, 4);
    expect(results.length).toBe(4);
    expect(results[0].testCentre.vtsSite).toBe('E');
    expect(results[1].testCentre.vtsSite).toBe('B');
    expect(results[2].testCentre.vtsSite).toBe('C');
    expect(results[3].testCentre.vtsSite).toBe('F');
  });

  function centres():  TestCentre[] {
    return [
      aTestCentre('A', 'Test Centre A', [1, 2]),
      aTestCentre('B', 'Test Centre B', [1, 2, 4]),
      aTestCentre('C', 'Test Centre C', [4]),
      aTestCentre('D', 'Test Centre D', [4, 5]),
      aTestCentre('E', 'Test Centre E', [1, 2, 4, 5]),
      aTestCentre('F', 'Test Centre F', [1, 4]),
    ];
  }


});
