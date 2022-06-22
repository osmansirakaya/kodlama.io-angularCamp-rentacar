import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarupdateComponent } from './carupdate.component';

describe('CarupdateComponent', () => {
  let component: CarupdateComponent;
  let fixture: ComponentFixture<CarupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
