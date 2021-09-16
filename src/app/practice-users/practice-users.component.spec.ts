import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeUsersComponent } from './practice-users.component';

describe('PracticeUsersComponent', () => {
  let component: PracticeUsersComponent;
  let fixture: ComponentFixture<PracticeUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
