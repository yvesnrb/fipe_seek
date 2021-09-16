export const mongoConfig = {
  url: process.env.MONGO_URL || 'mongodb://localhost:27017',
  maxPoolSize: process.env.MONGO_MAX_POOL || '10',
  database: process.env.MONGO_DB || 'fipeseeker',
};
