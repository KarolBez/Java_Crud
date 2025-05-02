import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Semester } from '../models/semester.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SemesterService {
  private baseUrl = 'http://localhost:8081/semesters';

  constructor(private http: HttpClient) {}

  getSemesters(): Observable<Semester[]> {
    return this.http.get<Semester[]>(this.baseUrl);
  }

  createSemester(semester: Semester): Observable<Semester> {
    return this.http.post<Semester>(this.baseUrl, semester);
  }

  updateSemester(id: string, semester: Semester): Observable<Semester> {
    return this.http.put<Semester>(`${this.baseUrl}/${id}`, semester);
  }

  deleteSemester(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
