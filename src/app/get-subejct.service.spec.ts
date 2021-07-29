import { TestBed } from '@angular/core/testing';

import { GetSubejctService } from './get-subejct.service';

describe('GetSubejctService', () => {
  let service: GetSubejctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSubejctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
