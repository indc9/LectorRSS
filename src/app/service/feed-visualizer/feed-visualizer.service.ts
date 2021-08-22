import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FeedVisualizerService {


  constructor(private readonly http: HttpClient) { }

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

}
