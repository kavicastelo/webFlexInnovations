import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackDevComponent } from './back-dev.component';

describe('BackDevComponent', () => {
  let component: BackDevComponent;
  let fixture: ComponentFixture<BackDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
