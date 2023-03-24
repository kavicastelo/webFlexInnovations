import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFeedbacksComponent } from './dashboard-feedbacks.component';

describe('DashboardFeedbacksComponent', () => {
  let component: DashboardFeedbacksComponent;
  let fixture: ComponentFixture<DashboardFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFeedbacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
