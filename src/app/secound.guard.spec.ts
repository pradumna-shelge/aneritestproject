import { TestBed } from '@angular/core/testing';

import { SecoundGuard } from './secound.guard';

describe('SecoundGuard', () => {
  let guard: SecoundGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecoundGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
