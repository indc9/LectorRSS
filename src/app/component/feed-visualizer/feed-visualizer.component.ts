import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { FeedVisualizerService } from 'src/app/service/feed-visualizer/feed-visualizer.service';
import * as xml2js from "xml2js";

export interface RssFeed {
  title: string;
  description: string;
  image: string;
}

const ELEMENT_DATA: RssFeed[] = [
  {title: '', description: '', image: ''}
];

/**
* @title Feed Table with filtering by Title
*/
@Component({
  selector: 'app-feed-visualizer',
  templateUrl: './feed-visualizer.component.html',
  styleUrls: ['./feed-visualizer.component.css'],
  providers: []
})
export class FeedVisualizerComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'image'];
  dataSource: MatTableDataSource<RssFeed>;

  constructor(private readonly feedVisualizerService: FeedVisualizerService,
    private router: Router) { 
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    //Subscribe RSS Feed Data from Service
    this.feedVisualizerService.getRssFeedData()
    .subscribe((data: any[]) => {  
      this.parseXML(data)  
        .then((data: any) => {  
          console.log(data)
          data.forEach((element: RssFeed) => {
            this.dataSource.data.push(element)
            this.dataSource._updateChangeSubscription();
          });
        });  
    });  
  }

  /**
  * Apply filter to Table DataSource
  * @param event
  */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
  * Get all row data from table
  * @returns Row data
  */
  trackByRow(index: any, item: any) {
    return item;
  }

  /**
  * Store xml data into array variable
  * @returns Array with RSS data
  */
  parseXML(data: RssFeed[]) {  
    return new Promise(resolve => {  
      var k: string | number,  
        arr: any = [],  
        parser = new xml2js.Parser(  
          {  
            trim: true,  
            explicitArray: true  
          });  
      parser.parseString(data, function (err: any, result: any) {  
        var obj = result.rss.channel[0]; 
        console.log(result.rss.channel[0]) 
        for (k in obj.item) {  
          var item = obj.item[k];
          arr.push({  
            title: item.title[0],  
            description: item.description[0],  
            image: item.enclosure[0].$.url
          });  
        }  
        resolve(arr);  
      });  
    });  
  }  

  /**
  * Store row data in Service and redirect to extended view
  * @param RSS Feed Data
  */
  showExtendedView(row: RssFeed) {
    //console.log("vista extendida" + JSON.stringify(row.description))
    this.feedVisualizerService.setFeedTitle(row.title);
    this.feedVisualizerService.setFeedDescription(row.description);
    this.feedVisualizerService.setFeedImage(row.image);

    this.router.navigate(["/inicio/info"]);
  }

}
