import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplineService } from '../services/discipline.service';
import { Discipline } from '../models/discipline.model';

@Component({
  selector: 'app-disciplines-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplines-list.component.html',
})
export class DisciplinesListComponent {
  private disciplineService = inject(DisciplineService);

  disciplines: Discipline[] = [];

  ngOnInit() {
    this.disciplineService.getDisciplines().subscribe({
      next: (data) => this.disciplines = data,
      error: (err) => console.error('Erro ao buscar disciplinas:', err)
    });
  }
}
