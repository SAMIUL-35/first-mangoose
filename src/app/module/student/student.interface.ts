export type Gender = 'Male' | 'Female' | 'Other';

export type BloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';

export type Guardian = {
  fatherName: string;
  motherName: string;
  fatherOccupation?: string;
  motherOccupation?: string;
  contactNo: string;
};

export type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
};
export type studentname = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type Student = {
  name: studentname;
  gender: Gender;
  dateOfBirth: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: BloodGroup;
  presentAddress: Address;
  permanentAddress: Address;
  guardian: Guardian;
  profileimg?:string;
  isActive:"active"|"inActive";
};
