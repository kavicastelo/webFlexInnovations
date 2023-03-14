import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingle2Component } from './blog-single2.component';

describe('BlogSingle2Component', () => {
  let component: BlogSingle2Component;
  let fixture: ComponentFixture<BlogSingle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSingle2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSingle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
