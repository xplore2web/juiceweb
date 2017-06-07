import { TestBed, inject } from '@angular/core/testing';

import { JuiceService } from './juice.service';

describe('JuiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JuiceService]
    });
  });

  it('should be created', inject([JuiceService], (service: JuiceService) => {
    expect(service).toBeTruthy();
  }));
});
