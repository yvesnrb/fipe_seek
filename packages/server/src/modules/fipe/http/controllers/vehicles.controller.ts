import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListVehiclesService } from '@services/list-vehicles.service';

export class VehiclesController {
  private listVehicles: ListVehiclesService;

  constructor() {
    this.listVehicles = container.resolve(ListVehiclesService);
  }

  public async list(request: Request, response: Response): Promise<void> {
    const { code } = request.params;
    const list = await this.listVehicles.execute({ code });

    response.json(list);
  }
}
