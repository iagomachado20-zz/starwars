import { TestBed, inject } from '@angular/core/testing';

import { UtilservicesService } from './utilservices.service';

describe('UtilservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilservicesService]
    });
  });

  it('should be created', inject([UtilservicesService], (service: UtilservicesService) => {
    expect(service).toBeTruthy();
  }));
});
