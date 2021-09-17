import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from 'src/app/pages/index/index.component';
import { VehiclesComponent } from 'src/app/pages/vehicles/vehicles.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'vehicles', component: VehiclesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
