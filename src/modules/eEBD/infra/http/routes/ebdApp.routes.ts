import { Router } from 'express';

import classRouter from './class.routes';
import classStudentsRouter from './classStudents.routes';
import classTypeRouter from './classType.routes';
import ebdRouter from './ebd.routes';
import ebdClassRouter from './ebdClass.routes';
import lessonRouter from './lesson.routes';
import lessonMagazineRouter from './lessonMagazines.routes';
import magazineRouter from './magazine.routes';
import magazineTypeRouter from './magazineType.routes';
import resultEBDRouter from './resultEBD.routes';
import studentClassCallDetailsRouter from './studentClassCallDetails.routes';
import studentClassCallDetailsTotalRouter from './studentClassCallDetailsTotal.routes';
import studentsRouter from './students.routes';
import trimestreRouter from './trimestre.routes';

const ebdAppRouter = Router();

ebdAppRouter.use('/trimestre', trimestreRouter);
ebdAppRouter.use('/ebd', ebdRouter);
ebdAppRouter.use('/class-type', classTypeRouter);
ebdAppRouter.use('/classes', classRouter);
ebdAppRouter.use('/ebd-class', ebdClassRouter);
ebdAppRouter.use('/magazine-type', magazineTypeRouter);
ebdAppRouter.use('/magazine', magazineRouter);
ebdAppRouter.use('/lesson', lessonRouter);
ebdAppRouter.use('/lesson-magazine', lessonMagazineRouter);
ebdAppRouter.use('/students', studentsRouter);
ebdAppRouter.use('/class-students', classStudentsRouter);
ebdAppRouter.use('/student-class-call-details', studentClassCallDetailsRouter);
ebdAppRouter.use(
  '/student-class-call-details-total',
  studentClassCallDetailsTotalRouter,
);
ebdAppRouter.use('/result-ebd', resultEBDRouter);

export default ebdAppRouter;
