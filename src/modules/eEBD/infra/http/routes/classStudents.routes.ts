import { Router } from 'express';
import ClassStudentsController from '../controllers/ClassStudentsController';

const classStudentsRouter = Router();

const classStudentsController = new ClassStudentsController();

classStudentsRouter.post('/', classStudentsController.create);

export default classStudentsRouter;
