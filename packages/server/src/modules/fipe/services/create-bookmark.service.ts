import { injectable, inject } from 'tsyringe';
import { Collection } from 'mongodb';

import { Vehicle } from '@entities/vehicle.entity';
import { Bookmark } from '@entities/bookmark.entity';
import { IFipeProvider } from '@providers/i-fipe.provider';

interface IRequest {
  _id: string;
}

@injectable()
export class CreateBookmarkService {
  constructor(
    @inject('VehiclesCollection')
    private vehiclesCollection: Collection<Vehicle>,

    @inject('BookmarksCollection')
    private bookmarksCollection: Collection<Bookmark>,

    @inject('FipeProvider')
    private fipeProvider: IFipeProvider,
  ) {}

  public async execute(request: IRequest): Promise<Vehicle> {
    const { _id } = request;
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const bookmark = new Bookmark(_id);
    const cachedVehicle = await this.vehiclesCollection.findOne({ _id });
    let vehicle: Vehicle;

    if (
      !cachedVehicle ||
      cachedVehicle.updatedAt.getMonth() !== currentMonth ||
      cachedVehicle.updatedAt.getFullYear() !== currentYear
    ) {
      vehicle = await this.fipeProvider.getVehicle(_id);
      await this.vehiclesCollection.replaceOne({ _id: vehicle._id }, vehicle, {
        upsert: true,
      });
    } else {
      vehicle = cachedVehicle;
    }

    await this.bookmarksCollection.replaceOne({ _id }, bookmark, {
      upsert: true,
    });

    return {
      ...vehicle,
      isFavorite: true,
    };
  }
}
