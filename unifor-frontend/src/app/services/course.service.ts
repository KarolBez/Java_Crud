import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private baseUrl = 'http://localhost:8081/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course);
  }

  updateCourse(id: string, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/${id}`, course);
  }

  deleteCourse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
