import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule

  ]
})
export class MaterialModule {}

/*
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatTabsModule
    */
