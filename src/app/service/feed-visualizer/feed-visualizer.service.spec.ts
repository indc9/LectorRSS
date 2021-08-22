import { TestBed } from '@angular/core/testing';

import { FeedVisualizerService } from './feed-visualizer.service';

describe('FeedVisualizerService', () => {
  let service: FeedVisualizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedVisualizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
