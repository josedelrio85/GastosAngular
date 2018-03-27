import { TestBed, inject } from '@angular/core/testing';

import { EntidadesService } from './entidades-service.service';

describe('EntidadesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntidadesService]
    });
  });

  it('should be created', inject([EntidadesService], (service: EntidadesService) => {
    expect(service).toBeTruthy();
  }));
});
