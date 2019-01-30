import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostcodeForm } from '../model/postcode-form.interface';

@Component({
  selector: 'postcode-search',
  templateUrl: './postcode-search.component.html',
  styleUrls: ['./postcode-search.component.css']
})
export class PostcodeSearchComponent {

  public form: FormGroup;

  @Output()
  public searchPerformed = new EventEmitter<PostcodeForm>();

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      'postcode': ['', Validators.required],
      'class': ['4', Validators.required],
      'searchRadius': ['10', Validators.required]
    });
  }

  public searchByPostcode(): void {
    const postcode: string = this.form.controls['postcode'].value;
    const searchRadius: number = Number(this.form.controls['searchRadius'].value);
    const motClass: number = Number(this.form.controls['class'].value);

    this.searchPerformed.emit({
      postcode,
      searchRadius,
      class: motClass
    });
  }

}
