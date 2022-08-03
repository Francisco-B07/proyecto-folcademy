import { TestBed } from '@angular/core/testing';

import { RecuperarIdService } from './recuperar-id.service';

describe('RecuperarIdService', () => {
  let service: RecuperarIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperarIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
