import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { typeType } from '@providers/i-fipe.provider';
import { ListBrandsService } from '@services/list-brands.service';

export class BrandsController {
  private listBrands: ListBrandsService;

  constructor() {
    this.listBrands = container.resolve(ListBrandsService);
  }

  public async list(request: Request, response: Response): Promise<void> {
    const { type } = request.params;

    const list = await this.listBrands.execute({ type: type as typeType });

    response.json(list);
  }
}
