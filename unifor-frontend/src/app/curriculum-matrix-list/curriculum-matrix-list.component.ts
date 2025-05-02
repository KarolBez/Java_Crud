import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumMatrixService } from '../services/curriculum-matrix.service';
import { CurriculumMatrix } from '../models/curriculum-matrix.model';

@Component({
  selector: 'app-curriculum-matrix-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum-matrix-list.component.html',
})
export class CurriculumMatrixListComponent {
  private matrixService = inject(CurriculumMatrixService);

  matrix: CurriculumMatrix[] = [];

  ngOnInit() {
    this.matrixService.getMatrix().subscribe({
      next: (data) => this.matrix = data,
      error: (err) => console.error('Erro ao buscar matriz curricular:', err),
    });
  }
}
