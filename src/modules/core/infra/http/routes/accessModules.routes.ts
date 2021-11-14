import { Router } from 'express';

import AccessUsersModulesController from '../controllers/AccessUsersModulesController';

const accessModuleRouter = Router();

const accessUsersModulesController = new AccessUsersModulesController();

/* accessModuleRouter.get('/', accessUsersModulesController.index); */
accessModuleRouter.post('/', accessUsersModulesController.create);
/* accessModuleRouter.delete('/:access_module_id', accessUsersModulesController.delete); */

export default accessModuleRouter;
