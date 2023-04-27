import { TestBed } from '@angular/core/testing';

import { NewgardGuard } from './newgard.guard';

describe('NewgardGuard', () => {
  let guard: NewgardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewgardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
