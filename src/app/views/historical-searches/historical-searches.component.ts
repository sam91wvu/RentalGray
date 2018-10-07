import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-historical-searches',
  templateUrl: './historical-searches.component.html',
  styleUrls: ['./historical-searches.component.css']
})
export class HistoricalSearchesComponent implements OnInit {
  private userSearches: any[];
  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.userSearches = this.searchService.getStoredSearches();
  }

}
