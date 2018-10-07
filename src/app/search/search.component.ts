import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private userSearch: string;
  private searchResult: object;
  private userCart: string[];
  private userSelectedItem: string;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.userCart = [];
    this.route.params.subscribe(
      params => {
        this.userSearch = params['searchString'];
    });

    if (this.userSearch) {
    this.http.get('/search/?item=' + this.userSearch).subscribe(data => {
      this.searchResult = data;
      console.log(this.searchResult);
    });
    }
  }

  addToCart($event) {
    this.userSelectedItem = $event.toString();
    this.userCart.push(this.userSelectedItem);
    console.log('After adding ' + this.userSelectedItem + ' to the cart, the cart currently contains: ' + this.userCart);
  }
}
