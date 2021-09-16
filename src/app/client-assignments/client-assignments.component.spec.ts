import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAssignmentsComponent } from './client-assignments.component';

describe('ClientAssignmentsComponent', () => {
  let component: ClientAssignmentsComponent;
  let fixture: ComponentFixture<ClientAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAssignmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
