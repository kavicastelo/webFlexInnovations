import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSigninComponent } from './admin-signin.component';

describe('AdminSigninComponent', () => {
  let component: AdminSigninComponent;
  let fixture: ComponentFixture<AdminSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
