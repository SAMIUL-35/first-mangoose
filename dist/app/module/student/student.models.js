"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Sub-schema for Name
const nameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
});
// Sub-schema for Address
const addressSchema = new mongoose_1.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
});
// Sub-schema for Guardian
const guardianSchema = new mongoose_1.Schema({
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    fatherOccupation: { type: String, required: false },
    motherOccupation: { type: String, required: false },
    contactNo: { type: String, required: true },
});
// Main Student Schema
const studentSchema = new mongoose_1.Schema({
    name: { type: nameSchema, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true,
    },
    presentAddress: { type: addressSchema, required: true },
    permanentAddress: { type: addressSchema, required: true },
    guardian: { type: guardianSchema, required: true },
    profileimg: { type: String, required: false },
    isActive: { type: String, enum: ['active', 'inActive'], required: true },
});
const StudentModel = (0, mongoose_1.model)('Student', studentSchema);
exports.default = StudentModel;
