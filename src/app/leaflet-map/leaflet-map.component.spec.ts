import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, marker } from 'leaflet';
import { LeafletMapComponent } from './leaflet-map.component';
import { aPoint, aTestCentreResult } from '../test-helpers';
import { TestCentreResult } from '../model/test-centre-result.interface';
import { LeafletService } from '../leaflet.service';
import { MockLeafletService } from '../mock-leaflet.service';

describe('LeafletMapComponent', () => {

  let fixtureUnderTest: ComponentFixture<LeafletMapComponent>;
  let componentUnderTest: LeafletMapComponent;
  let mockLeafletService: LeafletService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeafletMapComponent
      ],
      imports: [
        LeafletModule.forRoot()
      ],
      providers: [
        { provide: LeafletService, useClass: MockLeafletService }
      ]
    }).compileComponents();

    fixtureUnderTest = TestBed.createComponent(LeafletMapComponent);
    componentUnderTest = fixtureUnderTest.componentInstance;
    mockLeafletService = TestBed.get(LeafletService);
  }));

  it('should initialise with no markers', async(() => {
    expect(componentUnderTest.layers.length).toBe(0);
  }));

  it('should update markers when results change', async(() => {
    spyOn(mockLeafletService, 'aMarkerWithPopup').and.returnValue( marker([55, -1], {}));
    componentUnderTest.mapCentre = aPoint(55, -1);
    const results: TestCentreResult[] = [
      aTestCentreResult('A', 'X', 10, aPoint(55, -1)),
      aTestCentreResult('A', 'X', 10,  aPoint(56, -1.2))
    ];
    componentUnderTest.results = results;

    componentUnderTest.ngOnChanges({
      results: new SimpleChange(null, results, true)
    });
    fixtureUnderTest.detectChanges();

    expect(componentUnderTest.layers.length).toBe(2);
  }));

  it('should update map centre when map centre changes', async(() => {
    spyOn(mockLeafletService, 'aLatLng').and.returnValue(latLng(55, -1));
    componentUnderTest.mapCentre = aPoint(55, -1);

    componentUnderTest.ngOnChanges({
      mapCentre: new SimpleChange(null, aPoint(55, -1), true)
    });
    fixtureUnderTest.detectChanges();

    expect(componentUnderTest.centre).toEqual(latLng(55, -1));
  }));

});
