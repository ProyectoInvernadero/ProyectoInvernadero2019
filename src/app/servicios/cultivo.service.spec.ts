import { TestBed } from '@angular/core/testing';

import { CultivoService } from './cultivo.service';

describe('CultivoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CultivoService = TestBed.get(CultivoService);
    expect(service).toBeTruthy();
  });
});
