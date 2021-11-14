import { Router } from 'express';
import EBDController from '../controllers/EBDController';

const ebdRouter = Router();

const ebdController = new EBDController();

ebdRouter.post('/', ebdController.create);

export default ebdRouter;
