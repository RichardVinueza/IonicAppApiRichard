import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneroomPage } from './oneroom.page';

describe('OneroomPage', () => {
  let component: OneroomPage;
  let fixture: ComponentFixture<OneroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneroomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
