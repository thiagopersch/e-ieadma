import { Router } from 'express';

import AccessLevelController from '../controllers/AccessLevelsController';

const accessLevelsRouter = Router();

const accessLevelController = new AccessLevelController();

/* accessLevelsRouter.get('/', accessLevelController.index); */
accessLevelsRouter.post('/', accessLevelController.create);
/* accessLevelsRouter.delete('/:access_level_id', accessLevelController.delete); */

export default accessLevelsRouter;
