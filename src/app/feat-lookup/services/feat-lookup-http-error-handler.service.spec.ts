import { TestBed } from '@angular/core/testing';
import { FeatLookupHttpErrorHandlerService } from '@app/feat-lookup/services/feat-lookup-http-error-handler.service';

describe('FeatLookupHttpErrorHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatLookupHttpErrorHandlerService = TestBed.get(FeatLookupHttpErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
