import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PostcodeForm } from '../model/postcode-form.interface';

@Component({
  selector: 'postcode-search',
  template: ''
})
export class MockPostcodeSearchComponent {

  public form: FormGroup;

  @Output()
  public searchPerformed = new EventEmitter<PostcodeForm>();

  public searchByPostcode() {
    // Stub
  }

}
