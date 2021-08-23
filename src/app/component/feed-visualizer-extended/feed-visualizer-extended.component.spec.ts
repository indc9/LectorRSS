import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedVisualizerExtendedComponent } from './feed-visualizer-extended.component';

describe('FeedVisualizerExtendedComponent', () => {
  let component: FeedVisualizerExtendedComponent;
  let fixture: ComponentFixture<FeedVisualizerExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedVisualizerExtendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedVisualizerExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
