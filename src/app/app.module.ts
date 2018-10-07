import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import { routing } from './app.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ItemDetailComponent,
    ShoppingCartComponent
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
export class AppModule { }
