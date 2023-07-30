import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVerifyComponent } from './dashboard-verify.component';

describe('DashboardVerifyComponent', () => {
  let component: DashboardVerifyComponent;
  let fixture: ComponentFixture<DashboardVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
