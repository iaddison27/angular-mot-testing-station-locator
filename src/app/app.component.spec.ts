import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from './app.component';
import { LoaderService } from './loader.service';
import { MockTestCentreService } from './mock-test-centre.service';
import { MockHeaderComponent } from './header/mock-header.component';
import { MockSearchFormComponent } from './search-form/mock-search-form.component';
import { MockResultsComponent } from './results/mock-results.component';
import { MockSearchService } from './mock-search.service';
import { SearchService } from './search.service';
import { aPoint, aTestCentre, aTestCentreResult } from './test-helpers';

describe('AppComponent', () => {

  let fixtureUnderTest: ComponentFixture<AppComponent>;
  let componentUnderTest: AppComponent;
  let mockLoaderService: LoaderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockSearchFormComponent,
        MockResultsComponent
      ],
      providers: [
        { provide: LoaderService, useClass: MockTestCentreService }

      ]
    }).overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: SearchService, useClass: MockSearchService },
          { provide: LoaderService, useClass: MockTestCentreService }
        ]
      }
    }).compileComponents();

    fixtureUnderTest = TestBed.createComponent(AppComponent);
    componentUnderTest = fixtureUnderTest.componentInstance;
    // AppComponent provides the LoaderService, so retrieve it from the component itself
    mockLoaderService = fixtureUnderTest.debugElement.injector.get(LoaderService);
  }));

  it('should initialise test centres on load', fakeAsync(() => {
    spyOn(mockLoaderService, 'getCentres').and.returnValue(Observable.of([
      aTestCentre('ABC001', 'Test Centre A', []),
      aTestCentre('ABC002', 'Test Centre B', []),
    ]));
    tick();
    fixtureUnderTest.detectChanges();
    expect(componentUnderTest.centres).toBeDefined();
  }));

  it('should update results when results change', () => {
    expect(componentUnderTest.results).toBeUndefined();
    componentUnderTest.onResultsChange([
      aTestCentreResult('ABC003', 'Test Centre C', 5)
    ]);
    expect(componentUnderTest.results.length).toBe(1);
    expect(componentUnderTest.results[0].testCentre.vtsSite).toBe('ABC003');
  });

  it('should update map centre when results change', () => {
    expect(componentUnderTest.mapCentre).toEqual(aPoint(55, -2));
    componentUnderTest.onMapCentreChange(aPoint(54, -1));
    expect(componentUnderTest.mapCentre).toEqual(aPoint(54, -1));
  });

});
