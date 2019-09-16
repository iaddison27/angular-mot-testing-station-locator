import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { NameSearchComponent } from './name-search.component';
import { aTestCentre, aTestCentreResult } from '../test-helpers';
import { NameSearchService } from '../name-search.service';
import { MockNameSearchService } from './mock-name-search.service';

describe('NameSearchComponent', () => {

  let fixtureUnderTest: ComponentFixture<NameSearchComponent>;
  let componentUnderTest: NameSearchComponent;
  let mockNameSearchService: NameSearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NameSearchComponent
      ],
      imports: [
        FormsModule,
        NgbModule
      ],
      providers: [
        { provide: NameSearchService, useClass: MockNameSearchService }
      ]
    }).compileComponents();

    fixtureUnderTest = TestBed.createComponent(NameSearchComponent);
    componentUnderTest = fixtureUnderTest.componentInstance;
    mockNameSearchService = TestBed.get(NameSearchService);
  }));

  it('should return the name of the test centre', () => {
    const name: string = componentUnderTest.formatter(aTestCentre('X', 'Y', []));
    expect(name).toBe('Y');
  });

  describe('typeahead functionality', () => {
    it('should filter results if 2 characters input', () => {
      spyOn(mockNameSearchService, 'searchByName').and.returnValue([
        aTestCentre('X', 'Garage 1', []),
        aTestCentre('Y', 'Car Menders', [])
      ]);
      componentUnderTest.search(of('ar')).subscribe(results => {
        expect(results.length).toBe(2);
        expect(results[0].name).toBe('Garage 1');
        expect(results[1].name).toBe('Car Menders');
      });
    });

    it('should not filter results if only 1 character input', () => {
      componentUnderTest.search(of('a')).subscribe(results => {
        spyOn(mockNameSearchService, 'searchByName');
        expect(results.length).toBe(0);
        expect(mockNameSearchService.searchByName).not.toHaveBeenCalled();
      });
    });
  });

  it('should emit event with selected item when an item is selected', async(() => {
    spyOn(componentUnderTest.selected, 'emit');
    componentUnderTest.select({
      item: aTestCentre('X', 'Y', []),
      preventDefault: () => {}
    });
    expect(componentUnderTest.selected.emit).toHaveBeenCalledWith(aTestCentreResult('X', 'Y', undefined));
  }));

});
