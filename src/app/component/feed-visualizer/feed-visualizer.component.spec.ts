import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedVisualizerComponent } from './feed-visualizer.component';

describe('FeedVisualizerComponent', () => {
  let component: FeedVisualizerComponent;
  let fixture: ComponentFixture<FeedVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedVisualizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
