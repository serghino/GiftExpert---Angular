import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, GifsSearch } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private _apiKey = environment.apiKey;
  private _gifsBaseUrl = environment.gifsBaseUrl;
  private _historical: string[] = [];
  public results: Gif[] = [];
  get historical(): string[] {
    // breaking reference to avoid modifications in private property.
    return [...this._historical];
  }

  constructor(private http: HttpClient){
    this._historical = JSON.parse(localStorage.getItem('historical')!) || [];
    this.results = JSON.parse(localStorage.getItem('lastResult')!) || [];
  }

  searchGifs(query: string = '', options: { limit: number, offset: number } = { limit: 10, offset: 0 }){
    // to lowercase
    query = query.trim().toLocaleLowerCase();
    // avoid duplicates
    if (!this._historical.includes(query)) {
      this._historical.unshift(query);
      // remain only the last 10 items
      this._historical = this._historical.slice(0, 10);
      localStorage.setItem('historical', JSON.stringify(this._historical));
    }

    const params = new HttpParams()
                    .set('api_key', this._apiKey)
                    .set('offset', options.offset.toString())
                    .set('limit', options.limit.toString())
                    .set('q', query)

    this.http.get<GifsSearch>(`${this._gifsBaseUrl}/search`, { params })
      .subscribe((response) => {
        this.results = response.data;
        this.results && localStorage.setItem('lastResult', JSON.stringify(this.results));
      });
  }
}
