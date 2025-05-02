import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurriculumMatrixService } from '../services/curriculum-matrix.service';
import { CourseService } from '../services/course.service';
import { DisciplineService } from '../services/discipline.service';
import { SemesterService } from '../services/semester.service';
import { Course } from '../models/course.model';
import { Discipline } from '../models/discipline.model';
import { Semester } from '../models/semester.model';
import { CurriculumMatrix } from '../models/curriculum-matrix.model';

@Component({
  selector: 'app-curriculum-matrix-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './curriculum-matrix-form.component.html',
})
export class CurriculumMatrixFormComponent {
  private fb = inject(FormBuilder);
  private matrixService = inject(CurriculumMatrixService);
  private courseService = inject(CourseService);
  private disciplineService = inject(DisciplineService);
  private semesterService = inject(SemesterService);

  @Input() editingMatrix?: CurriculumMatrix;

  form: FormGroup = this.fb.group({
    courseId: ['', Validators.required],
    disciplineId: ['', Validators.required],
    semesterId: ['', Validators.required],
  });

  courses: Course[] = [];
  disciplines: Discipline[] = [];
  semesters: Semester[] = [];

  ngOnInit() {
    if (this.editingMatrix) {
      this.form.patchValue({
        courseId: this.editingMatrix.course.id,
        disciplineId: this.editingMatrix.discipline.id,
        semesterId: this.editingMatrix.semester.id,
      });
    }

    this.courseService.getCourses().subscribe(res => this.courses = res);
    this.disciplineService.getDisciplines().subscribe(res => this.disciplines = res);
    this.semesterService.getSemesters().subscribe(res => this.semesters = res);
  }

  submit() {
    if (this.form.invalid) return;

    const formData = this.form.value;

    const matrixData: CurriculumMatrix = {
      course: this.courses.find(c => c.id === formData.courseId)!,
      discipline: this.disciplines.find(d => d.id === formData.disciplineId)!,
      semester: this.semesters.find(s => s.id === formData.semesterId)!,
    };

    if (this.editingMatrix) {
      this.matrixService.updateMatrix(this.editingMatrix.id!, matrixData).subscribe({
        next: () => alert('Matriz atualizada!'),
        error: (err) => alert('Erro ao atualizar: ' + err.message),
      });
    } else {
      this.matrixService.createMatrix(matrixData).subscribe({
        next: () => {
          alert('Matriz criada!');
          this.form.reset();
        },
        error: (err) => alert('Erro ao criar: ' + err.message),
      });
    }
  }
}
