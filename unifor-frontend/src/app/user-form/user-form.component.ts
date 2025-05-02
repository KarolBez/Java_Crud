import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);

  @Input() editingUser?: User;

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
  });

  ngOnInit() {
    if (this.editingUser) {
      this.form.patchValue(this.editingUser);
    }
  }

  submit() {
    if (this.form.invalid) return;

    const userData = this.form.value as User;

    if (this.editingUser) {
      this.userService.updateUser(this.editingUser.id, userData).subscribe({
        next: (res) => alert('Usuário atualizado com sucesso!'),
        error: (err) => alert('Erro ao atualizar: ' + err.message),
      });
    } else {
      this.userService.createUser(userData).subscribe({
        next: (res) => {
          alert('Usuário criado!');
          this.form.reset();
        },
        error: (err) => alert('Erro ao criar: ' + err.message),
      });
    }
  }
}
