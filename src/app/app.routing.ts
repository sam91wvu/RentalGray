import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:searchString',
    component: SearchComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {enableTracing: false});
