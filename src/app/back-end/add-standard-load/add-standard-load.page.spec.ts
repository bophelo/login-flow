import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStandardLoadPage } from './add-standard-load.page';

describe('AddStandardLoadPage', () => {
  let component: AddStandardLoadPage;
  let fixture: ComponentFixture<AddStandardLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStandardLoadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStandardLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
