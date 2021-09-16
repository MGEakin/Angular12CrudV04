import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeRolesComponent } from './practice-roles.component';

describe('PracticeRolesComponent', () => {
  let component: PracticeRolesComponent;
  let fixture: ComponentFixture<PracticeRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
