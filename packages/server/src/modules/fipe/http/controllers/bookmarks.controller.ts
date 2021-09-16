import { Request, Response } from 'express';

export class BookmarksController {
  public async list(_request: Request, response: Response): Promise<void> {
    response.json({ status: 'ok' });
  }

  public async create(_request: Request, response: Response): Promise<void> {
    response.json({ status: 'ok' });
  }
}
