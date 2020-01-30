import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreoPage } from './monitoreo.page';

describe('MonitoreoPage', () => {
  let component: MonitoreoPage;
  let fixture: ComponentFixture<MonitoreoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoreoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
