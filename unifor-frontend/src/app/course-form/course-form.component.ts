import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './course-form.component.html',
})
export class CourseFormComponent {
  private fb = inject(FormBuilder);
  private courseService = inject(CourseService);

  @Input() editingCourse?: Course;

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
  });

  ngOnInit() {
    if (this.editingCourse) {
      this.form.patchValue(this.editingCourse);
    }
  }

  submit() {
    if (this.form.invalid) return;

    const courseData = this.form.value as Course;

    if (this.editingCourse) {
      this.courseService.updateCourse(this.editingCourse.id!, courseData).subscribe({
        next: () => alert('Curso atualizado com sucesso!'),
        error: (err) => alert('Erro ao atualizar: ' + err.message),
      });
    } else {
      this.courseService.createCourse(courseData).subscribe({
        next: () => {
          alert('Curso criado com sucesso!');
          this.form.reset();
        },
        error: (err) => alert('Erro ao criar: ' + err.message),
      });
    }
  }
}
