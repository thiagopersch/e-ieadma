import { Router } from 'express';

import appModulesRouter from './appModules.routes';
import accessLevelsRouter from './accessLevels.routes';
import accessModulesRouter from './accessModules.routes';

const appRouter = Router();

appRouter.use('/modules', appModulesRouter);
appRouter.use('/access-levels', accessLevelsRouter);
appRouter.use('/access-modules', accessModulesRouter);

export default appRouter;
