import { Component } from '@angular/core';

import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/dtos/vehicle';
import { BookmarkService } from 'src/app/services/bookmark.service';

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

  constructor(
    private vehicleService: VehicleService,
    private bookmarkService: BookmarkService,
  ) {}

  public handleSearch(): void {
    this.isLoading = true;
    this.vehicleService.searchVehicles(this.fipeCode).subscribe(vehicles => {
      this.vehicles = vehicles;
      this.isLoading = false;
      if (!vehicles.length) this.isEmptySearch = true;
      else this.isEmptySearch = false;
    });
  }

  public handleBookmark(_id: string): void {
    this.bookmarkService.addBookmark(_id).subscribe(vehicle => {
      if (vehicle) {
        const bookmarkedVehicleIndex = this.vehicles.findIndex(
          v => v._id === vehicle._id,
        );
        this.vehicles.splice(bookmarkedVehicleIndex, 1, vehicle);
      }
    });
  }
}
