import { TestBed } from '@angular/core/testing';

import { DiceTrayService } from './dice-tray.service';

describe('DiceTrayService', () => {
  let service: DiceTrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceTrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
