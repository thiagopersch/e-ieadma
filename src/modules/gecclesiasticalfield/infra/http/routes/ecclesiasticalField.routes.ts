import { Router } from 'express';

import EcclesiasticalFieldController from '../controllers/EcclesiasticalFieldController';

const ecclesiasticalFieldRouter = Router();

const ecclesiasticalFieldController = new EcclesiasticalFieldController();

ecclesiasticalFieldRouter.get('/', ecclesiasticalFieldController.show);
ecclesiasticalFieldRouter.get(
  '/:ECCLESIASTICALFIELD_ID',
  ecclesiasticalFieldController.show,
);
ecclesiasticalFieldRouter.get('/', ecclesiasticalFieldController.index);
ecclesiasticalFieldRouter.post('/', ecclesiasticalFieldController.create);

export default ecclesiasticalFieldRouter;
