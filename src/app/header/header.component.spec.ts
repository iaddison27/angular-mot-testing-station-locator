import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header.component';
import { AboutModalComponent } from './about-modal/about-modal.component';

describe('HeaderComponent', () => {

  let fixtureUnderTest: ComponentFixture<HeaderComponent>;
  let componentUnderTest: HeaderComponent;
  let modalService: NgbModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        NgbModule
      ],
      providers: [

      ]
    }).compileComponents();

    fixtureUnderTest = TestBed.createComponent(HeaderComponent);
    componentUnderTest = fixtureUnderTest.componentInstance;
    modalService = TestBed.get(NgbModal);
  }));

  it('should open modal', () => {
    spyOn(modalService, 'open');
    componentUnderTest.open();
    expect(modalService.open).toHaveBeenCalledWith(AboutModalComponent);
  });

});
