import { TestBed } from '@angular/core/testing';

import { FeatLookupService } from './feat-lookup.service';

describe('FeatLookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatLookupService = TestBed.get(FeatLookupService);
    expect(service).toBeTruthy();
  });
});
