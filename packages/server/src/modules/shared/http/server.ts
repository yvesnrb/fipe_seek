import 'express-async-errors';
import express from 'express';
import cors from 'cors';
// import { errors } from 'celebrate';

import { handleError } from '@http/middleware/handle-error.middleware';
import { indexRouter } from '@http/routes/index.route';

const server = express();

server.use(cors());
server.use(express.json());
server.use(indexRouter);

// server.use(errors());
server.use(handleError);

export { server };
