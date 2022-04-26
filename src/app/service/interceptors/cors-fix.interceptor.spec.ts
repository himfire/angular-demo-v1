import { TestBed } from '@angular/core/testing';

import { CorsFixInterceptor } from './cors-fix.interceptor';

describe('CorsFixInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CorsFixInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CorsFixInterceptor = TestBed.inject(CorsFixInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
