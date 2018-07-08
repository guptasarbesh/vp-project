import { TestBed, inject } from '@angular/core/testing';

import { GlassesService } from './glasses.service';

describe('GlassesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlassesService]
    });
  });

  it('should be created', inject([GlassesService], (service: GlassesService) => {
    expect(service).toBeTruthy();
  }));
});
