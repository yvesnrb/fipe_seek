import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Brand } from 'src/app/dtos/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private serverUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  public getBrands(type: string): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.serverUrl}/brands/${type}`);
  }
}
