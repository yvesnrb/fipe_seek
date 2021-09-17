import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    VehiclesComponent,
    BookmarksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
