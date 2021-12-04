import { Router } from 'express';
import StudentController from '../controllers/StudentController';

const studentsRouter = Router();

const studentsController = new StudentController();

studentsRouter.post('/', studentsController.create);

export default studentsRouter;
