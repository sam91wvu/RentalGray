import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {HomeComponent} from './views/home/home.component';
import {SearchComponent} from './views/search/search.component';
import {routing} from './app.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ShoppingCartComponent} from './views/shopping-cart/shopping-cart.component';
import {ItemComponent} from './views/item/item.component';
import {ItemDetailComponent} from './views/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ItemDetailComponent,
    ShoppingCartComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
