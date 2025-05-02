import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

export class UserService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8081/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }
  
  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }
}
