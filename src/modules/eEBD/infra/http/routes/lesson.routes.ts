import { Router } from 'express';
import LessonsController from '../controllers/LessonsController';

const lessonRouter = Router();

const lessonsController = new LessonsController();

lessonRouter.post('/', lessonsController.create);

export default lessonRouter;
