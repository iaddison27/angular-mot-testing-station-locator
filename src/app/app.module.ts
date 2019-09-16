import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoaderService } from './loader.service';
import { PostcodeService } from './postcode.service';
import { TestCentreResultComponent } from './test-centre-result/test-centre-result.component';
import { DistanceService } from './distance.service';
import { ResultListComponent } from './result-list/result-list.component';
import { SearchService } from './search.service';
import { HeaderComponent } from './header/header.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { PostcodeSearchComponent } from './postcode-search/postcode-search.component';
import { NameSearchComponent } from './name-search/name-search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ResultsComponent } from './results/results.component';
import { LeafletService } from './leaflet.service';
import { AboutModalComponent } from './header/about-modal/about-modal.component';
import { NameSearchService } from './name-search.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutModalComponent,
    LeafletMapComponent,
    PostcodeSearchComponent,
    SearchFormComponent,
    NameSearchComponent,
    ResultsComponent,
    ResultListComponent,
    TestCentreResultComponent
  ],
  entryComponents: [
    AboutModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    LeafletModule.forRoot()
  ],
  providers: [LoaderService, SearchService, NameSearchService, PostcodeService, DistanceService, LeafletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
