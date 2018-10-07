import { Injectable } from '@angular/core';
import {Search} from '../views/search/search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchResults = [];
  currentSearch: Search = new Search();

  storeSeachResult(date: Date, searchResult: Object) {
    this.currentSearch = new Search(date, searchResult);
    this.searchResults.push(this.currentSearch);
  }

  getStoredSearches() {
    return this.searchResults;
  }

}
