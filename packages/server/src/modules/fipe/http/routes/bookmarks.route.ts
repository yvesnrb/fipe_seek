import { Router } from 'express';
// import { celebrate, Segments } from 'celebrate';

import { BookmarksController } from '@http/controllers/bookmarks.controller';

const bookmarksRouter = Router();
const bookmarksController = new BookmarksController();

bookmarksRouter.get('/', bookmarksController.list.bind(bookmarksController));

bookmarksRouter.post('/', bookmarksController.create.bind(bookmarksController));

export { bookmarksRouter };
