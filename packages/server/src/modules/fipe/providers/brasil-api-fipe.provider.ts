import axios from 'axios';

import { IFipeProvider, typeType } from '@providers/i-fipe.provider';
import { Brand } from '@entities/brand.entity';
import { Vehicle } from '@entities/vehicle.entity';

interface IMarca {
  nome: string;
  valor: string;
}

export class BrasilApiFipeProvider implements IFipeProvider {
  private url = 'https://brasilapi.com.br/api/fipe';

  public async listBrands(type: typeType): Promise<Brand[]> {
    let translatedType = 'carros';

    if (type === 'car') translatedType = 'carros';
    if (type === 'motorcycle') translatedType = 'motos';
    if (type === 'truck') translatedType = 'caminhoes';

    const response = await axios.get<IMarca[]>(
      `${this.url}/marcas/v1/${translatedType}`,
    );

    const list: Brand[] = response.data.map(marca => ({
      code: Number(marca.valor),
      name: marca.nome,
    }));

    return list;
  }

  public async listVehicles(_fipeCode: string): Promise<Vehicle[]> {
    throw new Error('Method not implemented.');
  }

  public async getVehicle(_id: string): Promise<Vehicle> {
    throw new Error('Method not implemented.');
  }
}
