import { TestBed } from '@angular/core/testing';

import { YoutubersService } from './youtubers.service';

describe('YoutubersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubersService = TestBed.get(YoutubersService);
    expect(service).toBeTruthy();
  });
});
