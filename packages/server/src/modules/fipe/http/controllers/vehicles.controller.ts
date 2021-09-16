import { Request, Response } from 'express';

export class VehiclesController {
  public async list(_request: Request, response: Response): Promise<void> {
    response.json({ status: 'ok' });
  }
}
