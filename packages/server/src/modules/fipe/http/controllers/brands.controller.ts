import { Request, Response } from 'express';

export class BrandsController {
  public async list(_request: Request, response: Response): Promise<void> {
    response.json({ status: 'ok' });
  }
}
