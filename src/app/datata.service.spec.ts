import { TestBed } from '@angular/core/testing';

import { DatataService } from './datata.service';

describe('DatataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatataService = TestBed.get(DatataService);
    expect(service).toBeTruthy();
  });
});
