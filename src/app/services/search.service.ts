import { Injectable } from '@angular/core';
import {Search} from '../views/search/search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchResults = [];
  currentSearch: Search = new Search();

  storeSeachResult(date: Date, searchResult: Object, userSearch: string) {
    this.currentSearch = new Search(date, searchResult, userSearch);
    this.searchResults.push(this.currentSearch);
  }

  getStoredSearches() {
    return this.searchResults;
  }

}
