import axios, { AxiosError } from 'axios';

import { IFipeProvider, typeType } from '@providers/i-fipe.provider';
import { Brand } from '@entities/brand.entity';
import { Vehicle } from '@entities/vehicle.entity';
import { AppError } from '@errors/app.error';

interface IMarca {
  nome: string;
  valor: string;
}

interface IVeiculo {
  valor: string;
  marca: string;
  modelo: string;
  anoModelo: number;
  combustivel: string;
  codigoFipe: string;
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

  public async listVehicles(fipeCode: string): Promise<Vehicle[]> {
    const response = await axios
      .get<IVeiculo[]>(`${this.url}/preco/v1/${fipeCode}`)
      .catch(reason => {
        const error = reason as AxiosError;
        if (error.response?.status === 400)
          throw new AppError('invalid fipeCode vehicle search attempt', 400);

        throw new AppError('unexpected BrasilAPI error', 500);
      });

    const list: Vehicle[] = response.data.map(veiculo => {
      return new Vehicle({
        fipeCode: veiculo.codigoFipe,
        brand: veiculo.marca,
        fuel: veiculo.combustivel,
        year: veiculo.anoModelo,
        model: veiculo.modelo,
        price: veiculo.valor,
      });
    });

    return list;
  }

  public async getVehicle(_id: string): Promise<Vehicle> {
    throw new Error('Method not implemented.');
  }
}
