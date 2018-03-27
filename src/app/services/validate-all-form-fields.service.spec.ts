import { TestBed, inject } from '@angular/core/testing';

import { ValidateAllFormFieldsService } from './validate-all-form-fields.service';

describe('ValidateAllFormFieldsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateAllFormFieldsService]
    });
  });

  it('should be created', inject([ValidateAllFormFieldsService], (service: ValidateAllFormFieldsService) => {
    expect(service).toBeTruthy();
  }));
});
