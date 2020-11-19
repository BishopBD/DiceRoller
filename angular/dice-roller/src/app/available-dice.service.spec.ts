import { TestBed } from '@angular/core/testing';

import { AvailableDiceService } from './available-dice.service';

describe('AvailableDiceService', () => {
  let service: AvailableDiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableDiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
