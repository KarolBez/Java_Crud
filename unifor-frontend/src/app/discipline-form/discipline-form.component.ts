import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DisciplineService } from '../services/discipline.service';
import { CourseService } from '../services/course.service';
import { Discipline } from '../models/discipline.model';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-discipline-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './discipline-form.component.html',
})
export class DisciplineFormComponent {
  private fb = inject(FormBuilder);
  private disciplineService = inject(DisciplineService);
  private courseService = inject(CourseService);

  @Input() editingDiscipline?: Discipline;

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    semester: ['', Validators.required],
    courseId: ['', Validators.required],
  });

  courses: Course[] = [];

  ngOnInit() {
    if (this.editingDiscipline) {
      this.form.patchValue({
        name: this.editingDiscipline.name,
        semester: this.editingDiscipline.semester,
        courseId: this.editingDiscipline.course.id,
      });
    }

    this.courseService.getCourses().subscribe({
      next: (data) => this.courses = data,
      error: (err) => console.error('Erro ao buscar cursos', err),
    });
  }

  submit() {
    if (this.form.invalid) return;

    const formData = this.form.value;

    const disciplinePayload: Discipline = {
      name: formData.name,
      semester: Number(formData.semester),
      course: this.courses.find(c => c.id === formData.courseId)!,
    };

    if (this.editingDiscipline) {
      this.disciplineService.updateDiscipline(this.editingDiscipline.id!, disciplinePayload).subscribe({
        next: () => alert('Disciplina atualizada!'),
        error: (err) => alert('Erro ao atualizar: ' + err.message),
      });
    } else {
      this.disciplineService.createDiscipline(disciplinePayload).subscribe({
        next: () => {
          alert('Disciplina criada!');
          this.form.reset();
        },
        error: (err) => alert('Erro ao criar: ' + err.message),
      });
    }
  }
}
