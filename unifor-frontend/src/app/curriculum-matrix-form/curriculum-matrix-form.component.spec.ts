import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumMatrixFormComponent } from './curriculum-matrix-form.component';

describe('CurriculumMatrixFormComponent', () => {
  let component: CurriculumMatrixFormComponent;
  let fixture: ComponentFixture<CurriculumMatrixFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumMatrixFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumMatrixFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
