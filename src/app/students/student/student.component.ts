import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {StudentService} from "../../shared/services/student.service";
import {StudentModel} from "../../shared/models/student.model";
import {FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnChanges {
  @Input()
  id?: number;

  @ViewChild('studentForm')
  private studentForm!: NgForm;

  constructor(private studentService: StudentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.id.currentValue > 0) {
      this.studentService.get(this.id as number)
        .subscribe(student => {
          if (this.studentForm) {
            this.studentForm.form.patchValue({ ...student });
          }
        });
    }
  }

  save(form?: FormGroup): void {
    if (form && form.valid) {
      this.studentService.create(form.getRawValue()).subscribe();
    }
  }
}
