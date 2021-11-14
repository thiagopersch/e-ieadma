import { Router } from 'express';

import ParentageController from '../controllers/ParentageController';

const parentageRouter = Router();

const parentageController = new ParentageController();

parentageRouter.post('/', parentageController.create);

export default parentageRouter;
