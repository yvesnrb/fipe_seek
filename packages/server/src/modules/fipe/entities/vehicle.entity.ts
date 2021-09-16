export interface ICreateVehicleDTO {
  fipeCode: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  price: string;
}

export class Vehicle {
  /**
   * Unique ID for this vehicle. It is composed of the fipeCode, year and fuel
   * separated by a forward slash.
   */
  public readonly _id: string;

  /**
   * Code that identifies the model of this vehicle on the FIPE database.
   */
  public readonly fipeCode: string;

  /**
   * Brand name for this vehicle.
   */
  public brand: string;

  /**
   * Model name for this vehicle.
   */
  public model: string;

  /**
   * Model year for this vehicle.
   */
  public year: number;

  /**
   * Fuel type for this vehicle.
   */
  public fuel: string;

  /**
   * Price for this vehicle in BRL.
   */
  public price: string;

  /**
   * True if this vehicle has been bookmarked as a favorite.
   */
  public isFavorite: boolean;

  /**
   * Date in which this entity was created.
   */
  public readonly createdAt: Date;

  /**
   * Date in which this entity was last updated.
   */
  public readonly updatedAt: Date;

  constructor(data: ICreateVehicleDTO) {
    const { fipeCode, brand, model, year, fuel, price } = data;

    this._id = `${fipeCode}/${year}/${fuel}`;
    this.fipeCode = fipeCode;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.fuel = fuel;
    this.price = price;
    this.isFavorite = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
