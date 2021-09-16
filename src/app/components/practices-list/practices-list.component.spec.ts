import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticesListComponent } from './practices-list.component';

describe('PracticesListComponent', () => {
  let component: PracticesListComponent;
  let fixture: ComponentFixture<PracticesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
