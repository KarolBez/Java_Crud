import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurriculumMatrix } from '../models/curriculum-matrix.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurriculumMatrixService {
  private baseUrl = 'http://localhost:8081/curriculum-matrix';

  constructor(private http: HttpClient) {}

  getMatrix(): Observable<CurriculumMatrix[]> {
    return this.http.get<CurriculumMatrix[]>(this.baseUrl);
  }

  createMatrix(matrix: CurriculumMatrix) {
    return this.http.post<CurriculumMatrix>(this.baseUrl, matrix);
  }
  
  updateMatrix(id: string, matrix: CurriculumMatrix) {
    return this.http.put<CurriculumMatrix>(`${this.baseUrl}/${id}`, matrix);
  }

}
