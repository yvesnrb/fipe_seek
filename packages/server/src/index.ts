/* eslint-disable no-console */
import 'reflect-metadata';
import 'dotenv/config';
import '@containers/index.container';

import { server } from '@http/server';
import { serverConfig } from '@config/server.config';
import { mongoClient } from '@/db';

mongoClient
  .connect()
  .then(() => {
    console.log('💾 MongoDB connected');
  })
  .catch(reason => {
    console.log('MongoBD connection failed');
    console.log(reason);
  });

server.listen(serverConfig.port, () => {
  console.log(`🚀 Server listening on localhost:${serverConfig.port}`);
});
