export interface StudentModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
}

export class StudentModel {
  static create(model: Omit<StudentModel, 'id'>): StudentModel {
    return {
      ...model,
      id: Math.floor(Math.random() * 100)
    };
  }
}
