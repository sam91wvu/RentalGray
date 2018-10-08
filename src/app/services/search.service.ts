import { Injectable } from '@angular/core';
import {Search} from '../views/search/search.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchResults = [];
  item: Object;
  currentSearch: Search = new Search();

  constructor(private http: HttpClient) {}

  storeSeachResult(date: Date, searchResult: Object, userSearch: string) {
    this.currentSearch = new Search(date, searchResult, userSearch);
    this.searchResults.push(this.currentSearch);
  }

  getStoredSearches() {
    return this.searchResults;
  }

  searchByItemId(searchInteger): Object {
    this.http.get('/viewItem/?id=' + searchInteger).subscribe(data => {
      this.item = data;
    });
    return this.item;
  }

}
