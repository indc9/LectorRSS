import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
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

  constructor(private readonly feedVisualizerService: FeedVisualizerService) { 
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  trackByRow(index: any, item: any) {
    return item;
  }

  //Store xml data into array variable
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

  showExtendedView(row: RssFeed) {
    console.log("vista extendida" + JSON.stringify(row))
  }

}
