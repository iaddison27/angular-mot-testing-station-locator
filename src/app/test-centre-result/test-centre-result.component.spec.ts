import { TestBed, ComponentFixture } from '@angular/core/testing';
import { aTestCentreResult } from '../test-helpers';
import { TestCentreResultComponent } from './test-centre-result.component';
import { Page } from '../page';

describe('TestCentreResult', () => {

  let fixtureUnderTest: ComponentFixture<TestCentreResultComponent>;
  let componentUnderTest: TestCentreResultComponent;
  let page: TestCentreResultPage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestCentreResultComponent
      ]
    }).compileComponents();

    fixtureUnderTest = TestBed.createComponent(TestCentreResultComponent);
    componentUnderTest = fixtureUnderTest.componentInstance;
    page = new TestCentreResultPage(fixtureUnderTest.debugElement);
  });

  it('should display distance if result distance is defined', () => {
    componentUnderTest.result = aTestCentreResult('X', 'Y', 2);
    fixtureUnderTest.detectChanges();
    page.updatePage();
    expect(page.distanceContainer.innerHTML).toBe('2 miles away');
  });

  it('should not display distance if distance is undefined', () => {
    componentUnderTest.result = aTestCentreResult('X', 'Y', undefined);
    fixtureUnderTest.detectChanges();
    page.updatePage();
    expect(page.distanceContainer).toBeUndefined();
  });

  class TestCentreResultPage extends Page {
    private _distanceContainer: HTMLElement;

    public updatePage(): void {
      this._distanceContainer = this.getHtmlElement('.text-muted.float-right');
    }

    get distanceContainer(): HTMLElement {
      return this._distanceContainer;
    }
  }

});
