import  Express  from "express";
import { StudentController} from "./student.controller";




const router=Express.Router()

router.post('/create_user',StudentController.createAStudent);
router.get('/',StudentController.getAllStudent);
router.get('/:studentId',StudentController.getSingleStudent);


export const StudentRoutes=router;