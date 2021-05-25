import { TestBed } from '@angular/core/testing';

import { MatchGenerateService } from './match-generate.service';

describe('MatchGenerateService', () => {
  let service: MatchGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
