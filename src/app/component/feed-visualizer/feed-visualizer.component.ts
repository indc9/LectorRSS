import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  title: string;
  description: string;
  image: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'title1', description: 'Hydrogen', image: 'H'},
  {title: 'title2', description: 'Helium', image: 'He'},
  {title: 'title3', description: 'Lithium', image: 'Li'},
  {title: 'title4', description: 'Beryllium', image: 'Be'},
  {title: 'title5', description: 'Boron', image: 'B'}
];

/**
 * @title Feed Table with filtering by Title
 */
@Component({
  selector: 'app-feed-visualizer',
  templateUrl: './feed-visualizer.component.html',
  styleUrls: ['./feed-visualizer.component.css']
})
export class FeedVisualizerComponent implements OnInit {


  displayedColumns: string[] = ['title', 'description', 'image'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  //dataSource: MatTableDataSource<Tarea>;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  trackByRow(index: any, item: any) {
    return item;
  }

}
