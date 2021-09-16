import { Brand } from '@entities/brand.entity';
import { Vehicle } from '@entities/vehicle.entity';

export type typeType = 'car' | 'motorcycle' | 'truck';

export interface IFipeProvider {
  /**
   * Lists brands from a vehicle type.
   *
   * @param type - Vehicle type. One of ['car', 'motorcycle', 'truck'].
   *
   * @returns A promise that resolves in an array of Brand entities.
   */
  listBrands(type: typeType): Promise<Brand[]>;

  /**
   * Lists vehicles from a fipeCode.
   *
   * @param fipeCode - Code that corresponds to a model in the FIPE database.
   *
   * @returns A promise that resolves in an array of Vehicle entities which
   * match the model code.
   */
  listVehicles(fipeCode: string): Promise<Vehicle[]>;

  /**
   * Get a single vehicle from its ID.
   *
   * @param id - ID that corresponds to a single vehicle (composed of its
   * fipeCode, year and fuel type separated by a forward slash)
   *
   * @returns A promise that resolves in a single Vehicle enity if a vehicle
   * was found that matched the ID. Undefined otherwise.
   */
  getVehicle(id: string): Promise<Vehicle>;
}
