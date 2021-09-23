import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOpeningsComponent } from './client-openings.component';

describe('ClientOpeningsComponent', () => {
  let component: ClientOpeningsComponent;
  let fixture: ComponentFixture<ClientOpeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOpeningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
