import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Discipline } from '../models/discipline.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DisciplineService {
  private baseUrl = 'http://localhost:8081/disciplines';

  constructor(private http: HttpClient) {}

  getDisciplines(): Observable<Discipline[]> {
    return this.http.get<Discipline[]>(this.baseUrl);
  }

  createDiscipline(discipline: Discipline): Observable<Discipline> {
    return this.http.post<Discipline>(this.baseUrl, discipline);
  }

  updateDiscipline(id: string, discipline: Discipline): Observable<Discipline> {
    return this.http.put<Discipline>(`${this.baseUrl}/${id}`, discipline);
  }

  deleteDiscipline(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
