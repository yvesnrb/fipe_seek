import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListBookmarksService } from '@services/list-bookmarks.service';
import { CreateBookmarkService } from '@services/create-bookmark.service';

export class BookmarksController {
  private listBookmarks: ListBookmarksService;

  private createBookmark: CreateBookmarkService;

  constructor() {
    this.listBookmarks = container.resolve(ListBookmarksService);
    this.createBookmark = container.resolve(CreateBookmarkService);
  }

  public async list(_request: Request, response: Response): Promise<void> {
    const list = await this.listBookmarks.execute();

    response.json(list);
  }

  public async create(request: Request, response: Response): Promise<void> {
    const { _id } = request.body;
    const vehicle = await this.createBookmark.execute({ _id });

    response.json(vehicle);
  }
}
