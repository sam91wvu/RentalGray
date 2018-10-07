import {fakeAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HistoricalSearchesComponent} from './historical-searches.component';

describe('HistoricalSearchesComponent', () => {
  let component: HistoricalSearchesComponent;
  let fixture: ComponentFixture<HistoricalSearchesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [HistoricalSearchesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HistoricalSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
