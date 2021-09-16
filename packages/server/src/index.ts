import 'dotenv/config';

import { server } from '@http/server';
import { serverConfig } from '@config/server.config';

server.listen(serverConfig.port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server listening on localhost:${serverConfig.port}`);
});
