import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchFormComponent } from './search-form.component';
import { MockNameSearchComponent } from '../name-search/mock-name-search.component';
import { MockPostcodeSearchComponent } from '../postcode-search/mock-postcode-search.component';
import { SearchService } from '../search.service';
import { PostcodeService } from '../postcode.service';
import { MockSearchService } from '../mock-search.service';
import { MockPostcodeService } from '../mock-postcode.service';
import { LatLng } from '../model/lat-lng.interface';
import { aTestCentreResult } from '../test-helpers';

describe('SearchFormComponent', () => {

  let fixtureUnderTest: ComponentFixture<SearchFormComponent>;
  let componentUnderTest: SearchFormComponent;
  let mockPostcodeService: PostcodeService;
  let mockSearchService: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchFormComponent,
        MockNameSearchComponent,
        MockPostcodeSearchComponent
      ],
      imports: [
        NgbModule.forRoot()
      ],
      providers: [
        { provide: SearchService, useClass: MockSearchService },
        { provide: PostcodeService, useClass: MockPostcodeService }

      ]
    }).overrideComponent(SearchFormComponent, {
      set: {
        providers: [
          {provide: SearchService, useClass: MockSearchService}
        ]
      }
    }).compileComponents();

    fixtureUnderTest = TestBed.createComponent(SearchFormComponent);
    componentUnderTest = fixtureUnderTest.componentInstance;
    mockPostcodeService = TestBed.get(PostcodeService);
    // SearchFormComponent provides the SearchService, so retrieve it from the component itself
    mockSearchService = fixtureUnderTest.debugElement.injector.get(SearchService);
  });

  describe('searchByPostcode tests', () => {
    beforeEach(() => {
      spyOn(mockPostcodeService, 'getLatLng').and.returnValue(Observable.of({
        result: aLatLng()
      }));
    });

    it('should emit results when searchByPostcode', () => {
      spyOn(componentUnderTest.resultsChange, 'emit');
      performSearch();

      expect(componentUnderTest.resultsChange.emit).toHaveBeenCalledWith(aTestCentreResult('01ABC', 'Test Centre 1', 10));
    });

    it('should call searchService with correct parameters', () => {
      performSearch();

      expect(mockSearchService.search).toHaveBeenCalledWith(undefined, aLatLng(), 10, 4);
    });

    function aLatLng(): LatLng {
      return {
        latitude: 55,
        longitude: -1.5
      }
    }

    function performSearch(): void {
      spyOn(mockSearchService, 'search').and.returnValue(aTestCentreResult('01ABC', 'Test Centre 1', 10));

      componentUnderTest.searchByPostcode({
        postcode: 'SW1 2WW',
        searchRadius: 10,
        class: 4
      });
    }
  });

  it('should emit the chosen result when one is selected', async(() => {
    spyOn(componentUnderTest.resultsChange, 'emit');
    componentUnderTest.selectCentre(aTestCentreResult('01ABC', 'Test Centre 1', 10));
    expect(componentUnderTest.resultsChange.emit).toHaveBeenCalledWith([aTestCentreResult('01ABC', 'Test Centre 1', 10)]);
  }));

});
