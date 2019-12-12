import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivoPage } from './cultivo.page';

describe('CultivoPage', () => {
  let component: CultivoPage;
  let fixture: ComponentFixture<CultivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultivoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
