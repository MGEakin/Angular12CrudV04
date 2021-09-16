import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAssignmentsComponent } from './practice-assignments.component';

describe('PracticeAssignmentsComponent', () => {
  let component: PracticeAssignmentsComponent;
  let fixture: ComponentFixture<PracticeAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeAssignmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
