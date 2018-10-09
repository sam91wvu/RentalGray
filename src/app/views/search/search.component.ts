import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {SearchService} from '../../services/search.service';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private userSearch: string;
  public searchResult: any[];
  private userCart: string[];
  private userSearches: string[];
  private userSelectedItem: string;
  public activePageDataChunk: any[];

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private shoppingCartService: ShoppingCartService,
              private searchService: SearchService) {
  }

  ngOnInit() {
    this.userCart = [];
    this.userSearches = this.searchService.getStoredSearches();
    this.route.params.subscribe(
      params => {
        this.userSearch = params['searchString'];
      });

    if (this.userSearch) {
      this.http.get('/search/?item=' + this.userSearch).subscribe(data => {
        this.searchResult = JSON.parse(JSON.stringify(data));
        this.activePageDataChunk = JSON.parse(JSON.stringify(data));
        this.searchService.storeSearchResult(new Date(), this.searchResult, this.userSearch);
      });
    }
  }

  runSearch(searchString) {
    this.http.get('/search/?item=' + searchString).subscribe(data => {
      this.activePageDataChunk = JSON.parse(JSON.stringify(data));
      this.searchResult = JSON.parse(JSON.stringify(data));
    });
    this.userSearch = searchString;
  }

  addToCart($event) {
    this.userSelectedItem = $event.toString();
    this.userCart = this.shoppingCartService.getShoppingCart();
    this.shoppingCartService.addToCart(this.userSelectedItem);
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.searchResult.slice(firstCut, secondCut);
  }


}
