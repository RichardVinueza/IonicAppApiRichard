import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostroomPage } from './postroom.page';

describe('PostroomPage', () => {
  let component: PostroomPage;
  let fixture: ComponentFixture<PostroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostroomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
