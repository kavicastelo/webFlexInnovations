import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingle1Component } from './blog-single1.component';

describe('BlogSingle1Component', () => {
  let component: BlogSingle1Component;
  let fixture: ComponentFixture<BlogSingle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSingle1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSingle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
