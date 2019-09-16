import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostcodeSearchComponent } from './postcode-search.component';

describe('PostcodeSearchComponent', () => {

  let fixtureUnderTest: ComponentFixture<PostcodeSearchComponent>;
  let componentUnderTest: PostcodeSearchComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostcodeSearchComponent
      ],
      imports: [
        ReactiveFormsModule,
        NgbModule
      ],
      providers: [

      ]
    }).compileComponents();

    fixtureUnderTest = TestBed.createComponent(PostcodeSearchComponent);
    componentUnderTest = fixtureUnderTest.componentInstance;
  }));

  it('should initialise class to "4" on load', async(() => {
    expect(componentUnderTest.form.controls['class'].value).toBe('4');
  }));

  describe('form validation', () => {
    it('should be invalid if postcode is empty', async(() => {
      expect(componentUnderTest.form.invalid).toBeTruthy();
    }));

    it('should be invalid if searchRadius is empty', async(() => {
      componentUnderTest.form.controls['postcode'].setValue( 'X');
      componentUnderTest.form.controls['searchRadius'].setValue( undefined);
      expect(componentUnderTest.form.invalid).toBeTruthy();
    }));

    it('should be valid if postcode supplied', async(() => {
      componentUnderTest.form.controls['postcode'].setValue( 'X');
      componentUnderTest.form.controls['searchRadius'].setValue( 10);
      expect(componentUnderTest.form.invalid).toBeFalsy();
    }));
  });

  it('should emit event when form is submitted', async(() => {
    spyOn(componentUnderTest.searchPerformed, 'emit');

    componentUnderTest.form.controls['postcode'].setValue( 'X');
    componentUnderTest.form.controls['class'].setValue( '1');
    componentUnderTest.form.controls['searchRadius'].setValue( '10');
    componentUnderTest.searchByPostcode();

    expect(componentUnderTest.searchPerformed.emit).toHaveBeenCalledWith({
      postcode: 'X',
      searchRadius: 10,
      class: 1
    });
  }));

});
