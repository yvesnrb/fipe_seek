import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  public getBookmarks(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.serverUrl}/bookmarks`);
  }
}
