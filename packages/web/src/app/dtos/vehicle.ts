export interface Vehicle {
  _id: string;
  fipeCode: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  price: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}
