import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosPage } from './procesos.page';

describe('ProcesosPage', () => {
  let component: ProcesosPage;
  let fixture: ComponentFixture<ProcesosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
