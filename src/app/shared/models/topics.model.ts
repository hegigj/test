import {StudentModel} from "./student.model";

export interface TopicsModel {
  id: number;
  title: string;
  attendance: StudentModel[];
  date: string;
}
