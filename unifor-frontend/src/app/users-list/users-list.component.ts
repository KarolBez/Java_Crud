import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
})
export class UsersListComponent {
  private userService = inject(UserService);

  users: User[] = [];

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Erro ao carregar usuários', err)
    });
  }
}
