import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FeedVisualizerService {

  private title$ = new BehaviorSubject<string>('');
  private description$ = new BehaviorSubject<string>('');
  private image$ = new BehaviorSubject<string>('');

  constructor(private readonly http: HttpClient) { }

  /**
  * Get RSS Feed Data from online XML
  * @return RSS Feed Data
  */
  getRssFeedData(): Observable<any> {

    const requestOptions: Object = {
      observe: "body",
      responseType: "text"  
    };

    return this.http
      .get<any>('https://cors-anywhere.herokuapp.com/https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss', requestOptions)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  // Get/Set selected RSS Feed row data
  getFeedTitle() {
    return this.title$.asObservable();
  }
  setFeedTitle(value: string) {
    this.title$.next(value);
  }
  getFeedDescription() {
    return this.description$.asObservable();
  }
  setFeedDescription(value: string) {
    this.description$.next(value);
  }
  getFeedImage() {
    return this.image$.asObservable();
  }
  setFeedImage(value: string) {
    this.image$.next(value);
  }

}
