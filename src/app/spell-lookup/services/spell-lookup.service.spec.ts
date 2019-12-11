import { TestBed } from '@angular/core/testing';

import { SpellLookupService } from './spell-lookup.service';

describe('SpellLookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpellLookupService = TestBed.get(SpellLookupService);
    expect(service).toBeTruthy();
  });
});
