import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-historical-searches',
  templateUrl: './historical-searches.component.html',
  styleUrls: ['./historical-searches.component.css']
})
export class HistoricalSearchesComponent implements OnInit {
  private userSearches: any[];
  private manipulatedUserSearches: string;
  private test3: string;
  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.userSearches = this.searchService.getStoredSearches();
    this.manipulatedUserSearches = JSON.stringify(this.userSearches);
    this.manipulatedUserSearches = JSON.parse(this.manipulatedUserSearches);
  }
}
