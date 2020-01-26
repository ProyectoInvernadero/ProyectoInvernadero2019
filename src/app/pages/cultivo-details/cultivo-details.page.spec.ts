import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivoDetailsPage } from './cultivo-details.page';

describe('CultivoDetailsPage', () => {
  let component: CultivoDetailsPage;
  let fixture: ComponentFixture<CultivoDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultivoDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultivoDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
