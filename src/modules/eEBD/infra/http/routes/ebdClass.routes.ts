import { Router } from 'express';
import EBDClassController from '../controllers/EBDClassController';

const ebdClassRouter = Router();

const ebdClassController = new EBDClassController();

ebdClassRouter.post('/', ebdClassController.create);

export default ebdClassRouter;
