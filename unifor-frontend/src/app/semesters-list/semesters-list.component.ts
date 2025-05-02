import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemesterService } from '../services/semester.service';
import { Semester } from '../models/semester.model';

@Component({
  selector: 'app-semesters-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './semesters-list.component.html',
})
export class SemestersListComponent {
  private semesterService = inject(SemesterService);

  semesters: Semester[] = [];

  ngOnInit() {
    this.semesterService.getSemesters().subscribe({
      next: (data) => this.semesters = data,
      error: (err) => console.error('Erro ao buscar semestres:', err)
    });
  }
}
