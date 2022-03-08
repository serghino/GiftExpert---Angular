import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  constructor(private gifsService: GifsService) { }
  public titleList = 'Gift-APP';
  public subtitleList = 'Dashboard';

  get historical(){
    return this.gifsService.historical;
  }

  search(term: string){
    this.gifsService.searchGifs(term);
  }
}
