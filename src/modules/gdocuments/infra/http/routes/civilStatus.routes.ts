import { Router } from 'express';

import CivilStatusController from '../controllers/CivilStatusController';

const civilStatusRouter = Router();

const civilStatusController = new CivilStatusController();

civilStatusRouter.post('/', civilStatusController.create);

export default civilStatusRouter;
