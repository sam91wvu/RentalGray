import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {SearchComponent} from './views/search/search.component';
import {ModuleWithProviders} from '@angular/core';
import {ItemDetailComponent} from './views/item-detail/item-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:searchString',
    component: SearchComponent
  },
  {
    path: 'view/:item',
    component: ItemDetailComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {enableTracing: false});
