import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private search: string;
  private searchResult: object;
  private unfilteredResults: object;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.search = params['searchString'];
    });

    if (this.search) {
    this.http.get('/search/?item=' + this.search).subscribe(data => {
      this.searchResult = data;
      console.log(this.searchResult);
    });
    }
  }
}
