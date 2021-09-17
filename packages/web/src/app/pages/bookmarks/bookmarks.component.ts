import { Component, OnInit } from '@angular/core';

import { Vehicle } from 'src/app/dtos/vehicle';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
  public isLoading = false;

  public isEmptySearch = false;

  public vehicles: Vehicle[] = [];

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.bookmarkService.getBookmarks().subscribe(vehicles => {
      this.vehicles = vehicles;
      this.isLoading = false;
      if (!vehicles.length) this.isEmptySearch = true;
      if (vehicles.length) this.isEmptySearch = false;
    });
  }
}
