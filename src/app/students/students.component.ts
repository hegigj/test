import { Component, OnInit } from '@angular/core';
import {StudentService} from "../shared/services/student.service";
import {StudentModel} from "../shared/models/student.model";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: StudentModel[];
  selectedId?: number;

  constructor(private studentService: StudentService) {
    this.students = [];
  }

  ngOnInit(): void {
    this.studentService.getList()
      .subscribe(students => this.students = students);
  }

  back(): void {
    this.selectedId = undefined;
  }

  edit(id: number): void {
    this.selectedId = id;
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {

    }
  }
}
