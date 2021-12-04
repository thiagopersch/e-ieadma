import { Router } from 'express';
import ResultEBDController from '../controllers/ResultEBDController';

const resultEBDRouter = Router();

const resultEBDController = new ResultEBDController();

resultEBDRouter.post('/', resultEBDController.create);

export default resultEBDRouter;
