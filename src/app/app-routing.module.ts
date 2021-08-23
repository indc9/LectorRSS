import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedVisualizerExtendedComponent } from './component/feed-visualizer-extended/feed-visualizer-extended.component';
import { FeedVisualizerComponent } from './component/feed-visualizer/feed-visualizer.component';

const routes: Routes = [
  {
    path: "inicio",
    children: [
      { path : '', component: FeedVisualizerComponent, pathMatch:'full'},
      { path: 'info', component: FeedVisualizerExtendedComponent },
    ],
  },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
