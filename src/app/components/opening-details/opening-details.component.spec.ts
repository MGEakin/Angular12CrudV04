import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningDetailsComponent } from './opening-details.component';

describe('OpeningDetailsComponent', () => {
  let component: OpeningDetailsComponent;
  let fixture: ComponentFixture<OpeningDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
