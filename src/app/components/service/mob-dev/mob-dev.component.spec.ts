import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobDevComponent } from './mob-dev.component';

describe('MobDevComponent', () => {
  let component: MobDevComponent;
  let fixture: ComponentFixture<MobDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
