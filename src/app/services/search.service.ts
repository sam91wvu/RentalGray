import { Injectable } from '@angular/core';
import {Search} from '../views/search/search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchResults = [];
  currentSearch: Search = new Search();

  constructor() {}

  storeSeachResult(date: Date, searchResult: Object, userSearch: string) {
    let found = false;
    this.currentSearch = new Search(date, searchResult, userSearch);
    this.searchResults.forEach( object => {
     if (this.currentSearch.searchString === object.searchString) {
       found = true;
     }
    });
    if (found === false) {
      this.searchResults.push(this.currentSearch);
    }
  }

  getStoredSearches() {
    return this.searchResults;
  }

}
