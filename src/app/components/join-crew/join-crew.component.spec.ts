import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCrewComponent } from './join-crew.component';

describe('JoinCrewComponent', () => {
  let component: JoinCrewComponent;
  let fixture: ComponentFixture<JoinCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
