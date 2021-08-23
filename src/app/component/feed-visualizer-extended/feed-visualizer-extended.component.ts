import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { FeedVisualizerService } from 'src/app/service/feed-visualizer/feed-visualizer.service';

@Component({
  selector: 'app-feed-visualizer-extended',
  templateUrl: './feed-visualizer-extended.component.html',
  styleUrls: ['./feed-visualizer-extended.component.css']
})
export class FeedVisualizerExtendedComponent implements OnInit {

  title: string | undefined;
  description: string | undefined;
  image: string | undefined;

  unsubscribe = new Subject<boolean>(); //Destroy subscriptions when terminating

  constructor(private readonly feedVisualizerService: FeedVisualizerService,
    public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.feedVisualizerService.getFeedTitle()
      .pipe(delay(0), takeUntil(this.unsubscribe))
      .subscribe(data => {
        this.title = data;
        this.feedVisualizerService.getFeedDescription()
          .pipe(delay(0), takeUntil(this.unsubscribe))
          .subscribe(data => {
            this.description = data;
            this.feedVisualizerService.getFeedImage()
              .pipe(delay(0), takeUntil(this.unsubscribe))
              .subscribe(data => {
                this.image = data;

                if(this.title && this.description && this.image) {
                  console.log("OK")
                } else {
                  this.router.navigate(["../"], {relativeTo: this.route});
                }
              })
        })
    })

  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
  }

}
