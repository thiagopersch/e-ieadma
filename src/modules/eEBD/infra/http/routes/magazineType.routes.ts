import { Router } from 'express';
import MagazineTypeController from '../controllers/MagazineTypeController';

const magazineTypeRouter = Router();

const magazineTypeController = new MagazineTypeController();

magazineTypeRouter.post('/', magazineTypeController.create);

export default magazineTypeRouter;
