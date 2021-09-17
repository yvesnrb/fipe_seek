import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from 'src/app/pages/index/index.component';
import { VehiclesComponent } from 'src/app/pages/vehicles/vehicles.component';
import { BookmarksComponent } from 'src/app/pages/bookmarks/bookmarks.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'bookmarks', component: BookmarksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
