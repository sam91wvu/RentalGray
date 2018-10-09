import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Home} from './home-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeForm: FormGroup;
  public home: Home = new Home();
  private search: String;

  constructor(private router: Router,
              private formBuilder: FormBuilder
  ) {
  }

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
}
