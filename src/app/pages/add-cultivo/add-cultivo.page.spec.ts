import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCultivoPage } from './add-cultivo.page';

describe('AddCultivoPage', () => {
  let component: AddCultivoPage;
  let fixture: ComponentFixture<AddCultivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCultivoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCultivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
