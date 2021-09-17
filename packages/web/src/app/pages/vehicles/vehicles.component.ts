import { Component } from '@angular/core';

import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/dtos/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent {
  public fipeCode = '';

  public isLoading = false;

  public isEmptySearch = false;

  public vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  public handleSearch(): void {
    this.isLoading = true;
    this.vehicleService.searchVehicles(this.fipeCode).subscribe(vehicles => {
      this.vehicles = vehicles;
      this.isLoading = false;
      if (!vehicles.length) this.isEmptySearch = true;
      else this.isEmptySearch = false;
    });
  }
}
