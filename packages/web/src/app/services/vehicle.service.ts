import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Vehicle } from 'src/app/dtos/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private serverUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  public searchVehicles(fipeCode: string): Observable<Vehicle[]> {
    return this.http
      .get<Vehicle[]>(`${this.serverUrl}/vehicles/${fipeCode}`)
      .pipe(catchError(() => of([] as Vehicle[])));
  }
}
