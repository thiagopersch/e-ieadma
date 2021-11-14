import { Router } from 'express';

import AddressController from '../controllers/AddressController';

const addressRouter = Router();

const addressController = new AddressController();

addressRouter.post('/', addressController.create);

export default addressRouter;
