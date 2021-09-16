import { Router } from 'express';
// import { celebrate, Segments } from 'celebrate';

import { BrandsController } from '@http/controllers/brands.controller';

const brandsRouter = Router();
const brandsController = new BrandsController();

brandsRouter.get('/:type', brandsController.list.bind(brandsController));

export { brandsRouter };
