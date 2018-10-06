import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Home} from './home-model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  private homeForm: FormGroup;
  private home: Home = new Home();
  private search: String;
  private test: Object;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private breakpointObserver: BreakpointObserver
              ) {}

  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      'search': this.home.search
    });

    this.homeForm.controls['search'].valueChanges.subscribe(
      val => {
        this.home.search = val;
      }
    );
  }
    onSubmit() {
      console.log(this.home);
  }
}
