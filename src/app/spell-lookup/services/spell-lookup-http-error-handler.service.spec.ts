import { TestBed } from '@angular/core/testing';

import { SpellLookupHttpErrorHandlerService } from './spell-lookup-http-error-handler.service';

describe('SpellLookupHttpErrorHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpellLookupHttpErrorHandlerService = TestBed.get(SpellLookupHttpErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
