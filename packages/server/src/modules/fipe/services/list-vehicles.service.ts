import { injectable, inject } from 'tsyringe';
import { Collection } from 'mongodb';

import { IFipeProvider } from '@providers/i-fipe.provider';
import { Vehicle } from '@entities/vehicle.entity';
import { Bookmark } from '@entities/bookmark.entity';

interface IRequest {
  code: string;
}

@injectable()
export class ListVehiclesService {
  constructor(
    @inject('FipeProvider')
    private fipeProvider: IFipeProvider,

    @inject('VehiclesCollection')
    private vehiclesCollection: Collection<Vehicle>,

    @inject('BookmarksCollection')
    private bookmarksCollection: Collection<Bookmark>,
  ) {}

  public async execute(request: IRequest): Promise<Vehicle[]> {
    const { code } = request;
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const bookmarks = await this.bookmarksCollection.find().toArray();
    let list: Vehicle[] = [];

    const cachedList = await this.vehiclesCollection
      .find({ fipeCode: code })
      .toArray();

    const isValidCache = cachedList.every(vehicle => {
      if (
        vehicle.updatedAt.getMonth() === currentMonth &&
        vehicle.updatedAt.getFullYear() === currentYear
      ) {
        return true;
      }

      return false;
    });

    if (!isValidCache || !cachedList.length) {
      list = await this.fipeProvider.listVehicles(code);

      await Promise.all(
        list.map(async v => {
          await this.vehiclesCollection.replaceOne({ _id: v._id }, v, {
            upsert: true,
          });
        }),
      );
    } else {
      list = cachedList;
    }

    return list.map(v => ({
      ...v,
      isFavorite: Boolean(bookmarks.find(b => b._id === v._id)),
    }));
  }
}
