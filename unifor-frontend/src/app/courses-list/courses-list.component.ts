import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses-list.component.html',
})
export class CoursesListComponent {
  private courseService = inject(CourseService);

  courses: Course[] = [];

  ngOnInit() {
    this.courseService.getCourses().subscribe({
      next: (data) => this.courses = data,
      error: (err) => console.error('Erro ao buscar cursos:', err)
    });
  }
}
