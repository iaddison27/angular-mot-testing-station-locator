import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultListComponent } from './result-list.component';
import { MockTestCentreResultComponent } from '../test-centre-result/mock-test-centre-result.component';
import { TestCentreResult } from '../model/test-centre-result.interface';
import { aTestCentreResult } from '../test-helpers';

describe('ResultListComponent', () => {

  let fixtureUnderTest: ComponentFixture<ResultListComponent>;
  let componentUnderTest: ResultListComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResultListComponent,
        MockTestCentreResultComponent
      ],
      imports: [
        NgbModule.forRoot()
      ],
      providers: [

      ]
    }).compileComponents();

    fixtureUnderTest = TestBed.createComponent(ResultListComponent);
    componentUnderTest = fixtureUnderTest.componentInstance;
  }));

  describe('hasResults tests', () => {
    it('should return true when results is populated', async(() => {
      componentUnderTest.results = results();
      expect(componentUnderTest.hasResults()).toBeTruthy();
    }));

    it('should return false when results is not populated', async(() => {
      expect(componentUnderTest.hasResults()).toBeFalsy();
    }));
  });

  describe('noResults tests', () => {
    it('should return false when results is populated', async(() => {
      componentUnderTest.results = results();
      expect(componentUnderTest.noResults()).toBeFalsy();
    }));

    it('should return false when results is not populated', async(() => {
      expect(componentUnderTest.noResults()).toBeFalsy();
    }));

    it('should return true when results is length 0', async(() => {
      componentUnderTest.results = [];
      expect(componentUnderTest.noResults()).toBeTruthy();
    }));
  });

  it('should emit pageChange event with the current page number when the page changes', ()=> {
    spyOn(componentUnderTest.pageChange, 'emit');
    componentUnderTest.currentPage = 2;
    componentUnderTest.onPageChange();
    expect(componentUnderTest.pageChange.emit).toHaveBeenCalledWith(2);
  });

  it('should return page of results', () => {
    componentUnderTest.results = results();
    componentUnderTest.pageSize = 2;
    componentUnderTest.currentPage = 2;

    expect(componentUnderTest.pageResults).toEqual([
      aTestCentreResult('03ABC', 'Test Centre 3', 30),
      aTestCentreResult('04ABC', 'Test Centre 4', 40)
    ]);
  });

  function results(): TestCentreResult[] {
    return [
      aTestCentreResult('01ABC', 'Test Centre 1', 10),
      aTestCentreResult('02ABC', 'Test Centre 2', 20),
      aTestCentreResult('03ABC', 'Test Centre 3', 30),
      aTestCentreResult('04ABC', 'Test Centre 4', 40),
      aTestCentreResult('05ABC', 'Test Centre 5', 50)
    ];
  }

});
