import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedVisualizerComponent } from './component/feed-visualizer/feed-visualizer.component';

const routes: Routes = [
  {
    path: "inicio",
    component: FeedVisualizerComponent
  },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
