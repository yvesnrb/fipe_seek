import { MongoClient } from 'mongodb';

import { mongoConfig } from '@config/mongo.config';

export const mongoClient = new MongoClient(mongoConfig.url, {
  maxPoolSize: Number(mongoConfig.maxPoolSize),
});
