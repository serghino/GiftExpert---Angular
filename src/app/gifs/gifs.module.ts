import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './components/gifs-page/gifs-page.component';
import { SearchComponent } from './components/search/search.component';
import { SummaryComponent } from './components/summary/summary.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GifsPageComponent]
})
export class GifsModule { }
