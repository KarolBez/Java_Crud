import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SemesterService } from '../services/semester.service';
import { Semester } from '../models/semester.model';

@Component({
  selector: 'app-semester-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './semester-form.component.html',
})
export class SemesterFormComponent {
  private fb = inject(FormBuilder);
  private semesterService = inject(SemesterService);

  @Input() editingSemester?: Semester;

  form: FormGroup = this.fb.group({
    year: ['', Validators.required],
    period: ['', [Validators.required, Validators.pattern('^[1-2]$')]],
  });

  ngOnInit() {
    if (this.editingSemester) {
      this.form.patchValue(this.editingSemester);
    }
  }

  submit() {
    if (this.form.invalid) return;

    const semesterData = this.form.value as Semester;

    if (this.editingSemester) {
      this.semesterService.updateSemester(this.editingSemester.id!, semesterData).subscribe({
        next: () => alert('Semestre atualizado!'),
        error: (err) => alert('Erro ao atualizar: ' + err.message),
      });
    } else {
      this.semesterService.createSemester(semesterData).subscribe({
        next: () => {
          alert('Semestre criado!');
          this.form.reset();
        },
        error: (err) => alert('Erro ao criar: ' + err.message),
      });
    }
  }
}
