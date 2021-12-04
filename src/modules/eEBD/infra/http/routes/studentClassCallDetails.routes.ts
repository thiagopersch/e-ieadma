import { Router } from 'express';
import StudentClassCallDetailController from '../controllers/StudentClassCallDetailController';

const studentClassCallDetailsRouter = Router();

const studentClassCallDetailsController =
  new StudentClassCallDetailController();

studentClassCallDetailsRouter.post(
  '/',
  studentClassCallDetailsController.create,
);

export default studentClassCallDetailsRouter;
