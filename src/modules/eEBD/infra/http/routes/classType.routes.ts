import { Router } from 'express';
import ClassTypeController from '../controllers/ClassTypeController';

const classTypeRouter = Router();

const classTypeController = new ClassTypeController();

classTypeRouter.post('/', classTypeController.create);

export default classTypeRouter;
