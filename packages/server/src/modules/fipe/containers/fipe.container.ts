import { container } from 'tsyringe';

import { mongoClient } from '@/db';
import { mongoConfig } from '@config/mongo.config';
import { Vehicle } from '@entities/vehicle.entity';
import { Bookmark } from '@entities/bookmark.entity';
import { BrasilApiFipeProvider } from '@providers/brasil-api-fipe.provider';

container.register('VehiclesCollection', {
  useValue: mongoClient
    .db(mongoConfig.database)
    .collection<Vehicle>('vehicles'),
});

container.register('BookmarksCollection', {
  useValue: mongoClient
    .db(mongoConfig.database)
    .collection<Bookmark>('bookmarks'),
});

container.registerSingleton('FipeProvider', BrasilApiFipeProvider);
