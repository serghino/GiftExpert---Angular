import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  constructor(private gifsService: GifsService) { }

  @ViewChild('txtSearchInput') txtSearchInput!:ElementRef<HTMLInputElement>;
  searchGifs() {
    const term = this.txtSearchInput.nativeElement.value;
    if(term.trim().length === 0) {
      return; // do nothing
    }
    this.gifsService.searchGifs(term);
    //  clear input field
    this.txtSearchInput.nativeElement.value = '';
  }
}
