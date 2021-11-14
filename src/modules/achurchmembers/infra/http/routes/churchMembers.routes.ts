import { Router } from 'express';
import ChurchMembersController from '../controllers/ChurchMembersController';

const churchMembersRouter = Router();

const churchMembersController = new ChurchMembersController();

churchMembersRouter.post('/', churchMembersController.create);

export default churchMembersRouter;
