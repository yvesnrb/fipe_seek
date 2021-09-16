import { container } from 'tsyringe';

import { mongoClient } from '@/db';
import { mongoConfig } from '@config/mongo.config';
import { Vehicle } from '@entities/vehicle.entity';

container.register('VehiclesCollection', {
  useValue: mongoClient
    .db(mongoConfig.database)
    .collection<Vehicle>('vehicles'),
});
