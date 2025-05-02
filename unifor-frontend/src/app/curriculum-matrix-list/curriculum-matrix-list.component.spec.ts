import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumMatrixListComponent } from './curriculum-matrix-list.component';

describe('CurriculumMatrixListComponent', () => {
  let component: CurriculumMatrixListComponent;
  let fixture: ComponentFixture<CurriculumMatrixListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumMatrixListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumMatrixListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
