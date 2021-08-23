import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedVisualizerComponent } from './component/feed-visualizer/feed-visualizer.component';
import { MaterialModule } from './material-module/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FeedVisualizerExtendedComponent } from './component/feed-visualizer-extended/feed-visualizer-extended.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedVisualizerComponent,
    FeedVisualizerExtendedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
