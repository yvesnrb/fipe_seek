import { Router } from 'express';
// import { celebrate, Segments } from 'celebrate';

import { VehiclesController } from '@http/controllers/vehicles.controller';

const vehiclesRouter = Router();
const vehiclesController = new VehiclesController();

vehiclesRouter.get('/:code', vehiclesController.list.bind(vehiclesController));

export { vehiclesRouter };
