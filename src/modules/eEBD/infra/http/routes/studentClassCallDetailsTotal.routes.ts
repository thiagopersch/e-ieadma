import { Router } from 'express';
import StudentClassCallDetailsTotalController from '../controllers/StudentClassCallDetailsTotalController';

const studentClassCallDetailsTotalRouter = Router();

const studentClassCallDetailsTotalController =
  new StudentClassCallDetailsTotalController();

studentClassCallDetailsTotalRouter.post(
  '/',
  studentClassCallDetailsTotalController.create,
);

export default studentClassCallDetailsTotalRouter;
