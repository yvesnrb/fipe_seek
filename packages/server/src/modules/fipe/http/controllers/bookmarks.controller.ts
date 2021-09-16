import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateBookmarkService } from '@services/create-bookmark.service';

export class BookmarksController {
  private createBookmark: CreateBookmarkService;

  constructor() {
    this.createBookmark = container.resolve(CreateBookmarkService);
  }

  public async list(_request: Request, response: Response): Promise<void> {
    response.json({ status: 'ok' });
  }

  public async create(request: Request, response: Response): Promise<void> {
    const { _id } = request.body;
    const vehicle = await this.createBookmark.execute({ _id });

    response.json(vehicle);
  }
}
