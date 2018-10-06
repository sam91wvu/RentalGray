import { NgModule } from '@angular/core';

import {MatButtonModule, MatCardModule, MatGridListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
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
