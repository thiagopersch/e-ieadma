import { Router } from 'express';
import TrimestreController from '../controllers/TrimestreController';

const trimestreRouter = Router();

const trimestreController = new TrimestreController();

trimestreRouter.post('/', trimestreController.create);

export default trimestreRouter;
