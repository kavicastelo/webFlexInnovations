import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDevComponent } from './front-dev.component';

describe('FrontDevComponent', () => {
  let component: FrontDevComponent;
  let fixture: ComponentFixture<FrontDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
