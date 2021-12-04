import { Router } from 'express';
import LessonMagazinesController from '../controllers/LessonMagazinesController';

const lessonMagazineRouter = Router();

const lessonMagazineController = new LessonMagazinesController();

lessonMagazineRouter.post('/', lessonMagazineController.create);

export default lessonMagazineRouter;
