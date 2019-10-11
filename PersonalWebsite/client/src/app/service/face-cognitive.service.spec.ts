import { TestBed } from '@angular/core/testing';

import { FaceCognitiveService } from './face-cognitive.service';

describe('FaceCognitiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaceCognitiveService = TestBed.get(FaceCognitiveService);
    expect(service).toBeTruthy();
  });
});
