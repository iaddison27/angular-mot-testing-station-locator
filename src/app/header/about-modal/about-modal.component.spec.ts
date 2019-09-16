import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AboutModalComponent} from './about-modal.component';
import {Page} from '../../page';

describe('AboutModalComponent', () => {

  let fixtureUnderTest: ComponentFixture<AboutModalComponent>;
  let componentUnderTest: AboutModalComponent;
  let activeModal: NgbActiveModal;
  let page: TestCentreResultPage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutModalComponent
      ],
      imports: [
        NgbModule
      ],
      providers: [
        NgbActiveModal
      ]
    }).compileComponents();

    fixtureUnderTest = TestBed.createComponent(AboutModalComponent);
    componentUnderTest = fixtureUnderTest.componentInstance;
    activeModal = TestBed.get(NgbActiveModal);
    page = new TestCentreResultPage(fixtureUnderTest.debugElement);
  }));

  it('should call activeModal.dismiss when cross clicked', () => {
    spyOn(activeModal, 'dismiss');
    fixtureUnderTest.detectChanges();
    page.updatePage();
    page.closeButton.click();
    expect(activeModal.dismiss).toHaveBeenCalled();
  });

  class TestCentreResultPage extends Page {
    private _closeButton: HTMLButtonElement;

    public updatePage(): void {
      this._closeButton = this.getHtmlElement('button.close') as HTMLButtonElement;
    }

    get closeButton(): HTMLButtonElement {
      return this._closeButton;
    }
  }

});
