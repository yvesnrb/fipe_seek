import { Router } from 'express';

import { brandsRouter } from '@http/routes/brands.route';
import { vehiclesRouter } from '@http/routes/vehicles.route';
import { bookmarksRouter } from '@http/routes/bookmarks.route';

const indexRouter = Router();

indexRouter.use('/brands', brandsRouter);
indexRouter.use('/vehicles', vehiclesRouter);
indexRouter.use('/bookmarks', bookmarksRouter);

export { indexRouter };
