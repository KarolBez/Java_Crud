import { Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';
import { CoursesListComponent } from './courses-list/courses-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    loadComponent: () => import('./users-list/users-list.component').then(m => m.UsersListComponent),
  },
  {
    path: 'users/new',
    loadComponent: () => import('./user-form/user-form.component').then(m => m.UserFormComponent),
    canActivate: [() => roleGuard('admin')],
  },
  { path: 'courses', component: CoursesListComponent },
  {
    path: 'courses/new',
    loadComponent: () =>
      import('./course-form/course-form.component').then(m => m.CourseFormComponent),
    canActivate: [() => roleGuard('admin')],
  },
  {
    path: 'disciplines',
    loadComponent: () =>
      import('./disciplines-list/disciplines-list.component').then(m => m.DisciplinesListComponent),
  },
  {
    path: 'disciplines/new',
    loadComponent: () =>
      import('./discipline-form/discipline-form.component').then(m => m.DisciplineFormComponent),
    canActivate: [() => roleGuard('admin')],
  },
  {
    path: 'semesters',
    loadComponent: () =>
      import('./semesters-list/semesters-list.component').then(m => m.SemestersListComponent),
  },
  {
    path: 'semesters/new',
    loadComponent: () =>
      import('./semester-form/semester-form.component').then(m => m.SemesterFormComponent),
    canActivate: [() => roleGuard('admin')],
  },
  {
    path: 'curriculum-matrix',
    loadComponent: () =>
      import('./curriculum-matrix-list/curriculum-matrix-list.component').then(m => m.CurriculumMatrixListComponent),
  },
  {
    path: 'curriculum-matrix/new',
    loadComponent: () =>
      import('./curriculum-matrix-form/curriculum-matrix-form.component').then(m => m.CurriculumMatrixFormComponent),
    canActivate: [() => roleGuard('admin')],
  }


  

  

  



  

  

];
