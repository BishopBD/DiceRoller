import { TestBed } from '@angular/core/testing';

import { RollServiceService } from './roll-service.service';

describe('RollServiceService', () => {
  let service: RollServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RollServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
