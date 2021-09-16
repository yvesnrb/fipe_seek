import { injectable, inject } from 'tsyringe';
import { Collection } from 'mongodb';

import { Vehicle } from '@entities/vehicle.entity';
import { Bookmark } from '@entities/bookmark.entity';

@injectable()
export class ListBookmarksService {
  constructor(
    @inject('VehiclesCollection')
    private vehiclesCollection: Collection<Vehicle>,

    @inject('BookmarksCollection')
    private bookmarksCollection: Collection<Bookmark>,
  ) {}

  public async execute(): Promise<Vehicle[]> {
    const bookmarks = await this.bookmarksCollection.find().toArray();
    const cachedList = await this.vehiclesCollection
      .find({
        _id: { $in: bookmarks.map(b => b._id) },
      })
      .toArray();

    return cachedList.map(v => ({ ...v, isFavorite: true }));
  }
}
