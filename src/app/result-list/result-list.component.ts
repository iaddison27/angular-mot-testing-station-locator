import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestCentreResult } from '../model/test-centre-result.interface';

@Component({
  selector: 'result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent {

  @Input()
  public results: TestCentreResult[];

  @Input()
  public pageSize: number;

  @Output()
  public pageChange = new EventEmitter<number>();

  @Input()
  public currentPage: number = 1;

  public hasResults(): boolean {
    return this.results && this.results.length > 0;
  }

  public noResults(): boolean {
    return this.results && this.results.length === 0;
  }

  public onPageChange() {
    this.pageChange.emit(this.currentPage);
  }

  get pageResults(): TestCentreResult[] {
    const startIndex: number = (this.currentPage - 1) * this.pageSize;
    const endIndex: number = startIndex + this.pageSize;
    return this.results.slice(startIndex, endIndex);
  }

}
