import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Vehicle } from 'src/app/dtos/vehicle';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private serverUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  public addBookmark(_id: string): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.serverUrl}/bookmarks`, { _id });
  }
}
