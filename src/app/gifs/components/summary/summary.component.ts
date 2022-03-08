import { Component } from '@angular/core';
import { Gif } from '../../interface/gifs.interface';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styles: [
  ]
})
export class SummaryComponent {

  get results(): Gif[] {
    return this.gifsResults.results;
  }

  constructor(private gifsResults: GifsService) { }

}
