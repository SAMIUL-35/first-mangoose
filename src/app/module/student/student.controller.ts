import { Request, Response } from "express";
import { services } from './student.services';

const createAStudent=async(req:Request,res:Response)=>{
try{const {student:studentData}=req.body

  const result=await services.createStudentIntoDB(studentData);
  res.status(200).json({
    success:true,
    message:"student created successfully",
    data:result,
  }
  )}catch(error){
    console.log(error);
  }

}
const getAllStudent=async(req:Request,res:Response)=>{
try{

  const result=await services.getAllStudentFromDB();
  res.status(200).json({
    success:true,
    message:"all student data get successfully",
    data:result,
  }
  )}catch(error){
    console.log(error);
  }

}
const getSingleStudent=async(req:Request,res:Response)=>{
try{

  const {studentId}=req.params;

  const result=await services.getSingleStudentFromDB(studentId);
  res.status(200).json({
    success:true,
    message:"a student data get successfully",
    data:result,
  }
  )}catch(error){
    console.log(error);
  }

}

export const StudentController={
  createAStudent,getAllStudent,getSingleStudent
}