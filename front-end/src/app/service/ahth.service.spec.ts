import { TestBed } from '@angular/core/testing';

import { AhthService } from './ahth.service';

describe('AhthService', () => {
  let service: AhthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
