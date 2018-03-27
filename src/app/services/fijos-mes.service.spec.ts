import { TestBed, inject } from '@angular/core/testing';

import { FijosMesService } from './fijos-mes.service';

describe('FijosMesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FijosMesService]
    });
  });

  it('should be created', inject([FijosMesService], (service: FijosMesService) => {
    expect(service).toBeTruthy();
  }));
});
