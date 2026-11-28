import { TestBed } from '@angular/core/testing';
import { HttpContext } from './http-context';

describe('HttpContext', () => {
  let service: HttpContext;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpContext);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
