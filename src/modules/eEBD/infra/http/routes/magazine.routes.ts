import { Router } from 'express';
import MagazineController from '../controllers/MagazineController';

const magazineRouter = Router();

const magazineController = new MagazineController();

magazineRouter.post('/', magazineController.create);

export default magazineRouter;
