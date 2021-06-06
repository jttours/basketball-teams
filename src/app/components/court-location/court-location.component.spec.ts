import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtLocationComponent } from './court-location.component';

describe('CourtLocationComponent', () => {
  let component: CourtLocationComponent;
  let fixture: ComponentFixture<CourtLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
