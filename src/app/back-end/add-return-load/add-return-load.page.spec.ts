import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReturnLoadPage } from './add-return-load.page';

describe('AddReturnLoadPage', () => {
  let component: AddReturnLoadPage;
  let fixture: ComponentFixture<AddReturnLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReturnLoadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReturnLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
