import { Router } from 'express';
import ParentageTypeController from '../controllers/ParentageTypeController';

const parentageTypeRouter = Router();

const parentageTypeController = new ParentageTypeController();

parentageTypeRouter.post('/', parentageTypeController.create);

export default parentageTypeRouter;
