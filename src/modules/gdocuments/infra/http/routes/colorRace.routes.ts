import { Router } from 'express';
import ColorRaceController from '../controllers/ColorRaceController';

const colorRaceRouter = Router();

const colorRaceController = new ColorRaceController();

colorRaceRouter.post('/', colorRaceController.create);

export default colorRaceRouter;
