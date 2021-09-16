import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeOpeningsComponent } from './practice-openings.component';

describe('PracticeOpeningsComponent', () => {
  let component: PracticeOpeningsComponent;
  let fixture: ComponentFixture<PracticeOpeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeOpeningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
