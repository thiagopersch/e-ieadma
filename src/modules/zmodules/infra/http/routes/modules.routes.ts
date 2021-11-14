import { Router } from 'express';
import ModuleController from '../controllers/ModulesController';

const modulesRouter = Router();

const modulesController = new ModuleController();

modulesRouter.post('/', modulesController.create);

export default modulesRouter;
