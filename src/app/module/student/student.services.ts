import { Student } from "./student.interface";
import StudentModel from "./student.models";

const createStudentIntoDB=async(student:Student)=>{
const result=await StudentModel.create(student)
return result;
}
const getAllStudentFromDB=async()=>{
const result=await StudentModel.find()
return result;
}
const getSingleStudentFromDB=async(_id:string)=>{
const result=await StudentModel.find({_id})
return result;
}

export const services={
  createStudentIntoDB,getAllStudentFromDB,getSingleStudentFromDB
}