import { Router } from 'express';
import DocumentsController from '../controllers/DocumentsController';

const documentsRouter = Router();

const documentController = new DocumentsController();

documentsRouter.post('/', documentController.create);

export default documentsRouter;
