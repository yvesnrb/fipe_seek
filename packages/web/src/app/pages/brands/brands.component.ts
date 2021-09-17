import { Component } from '@angular/core';

import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/dtos/brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  public type = 'car';

  public isLoading = false;

  public brands: Brand[] = [];

  constructor(private brandService: BrandService) {}

  public setType(type: string): void {
    this.type = type;
  }

  public handleSearch(): void {
    this.isLoading = true;
    this.brandService.getBrands(this.type).subscribe(brands => {
      this.isLoading = false;
      this.brands = brands;
    });
  }
}
