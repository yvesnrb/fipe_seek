import { inject, injectable } from 'tsyringe';

import { Brand } from '@entities/brand.entity';
import { IFipeProvider, typeType } from '@providers/i-fipe.provider';

interface IRequest {
  type: typeType;
}

@injectable()
export class ListBrandsService {
  constructor(
    @inject('FipeProvider')
    private fipeProvider: IFipeProvider,
  ) {}

  public async execute(request: IRequest): Promise<Brand[]> {
    const { type } = request;
    const list = await this.fipeProvider.listBrands(type);

    return list;
  }
}
