import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStepAuthorizeComponent } from './two-step-authorize.component';

describe('TwoStepAuthorizeComponent', () => {
  let component: TwoStepAuthorizeComponent;
  let fixture: ComponentFixture<TwoStepAuthorizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoStepAuthorizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoStepAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
