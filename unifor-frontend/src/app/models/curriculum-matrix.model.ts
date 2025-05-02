import { Course } from './course.model';
import { Discipline } from './discipline.model';
import { Semester } from './semester.model';

export interface CurriculumMatrix {
  id?: string;
  course: Course;
  discipline: Discipline;
  semester: Semester;
}
