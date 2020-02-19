import { TestBed } from '@angular/core/testing';

import { VisionServiceService } from './vision-service.service';

describe('VisionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisionServiceService = TestBed.get(VisionServiceService);
    expect(service).toBeTruthy();
  });
});
