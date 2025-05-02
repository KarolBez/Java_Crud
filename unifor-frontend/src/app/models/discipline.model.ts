import { Course } from './course.model';

export interface Discipline {
  id?: string;
  name: string;
  semester: number;
  course: Course;
}
