package com.unifor.service;

import com.unifor.entity.CurriculumMatrix;
import com.unifor.repository.CurriculumMatrixRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.UUID;

@ApplicationScoped
public class CurriculumMatrixService {

    @Inject
    CurriculumMatrixRepository repository;

    public List<CurriculumMatrix> listAll() {
        return repository.listAll();
    }

    public CurriculumMatrix findById(UUID id) {
        return repository.findById(id);
    }

    @Transactional
    public CurriculumMatrix create(CurriculumMatrix matrix) {
        repository.persist(matrix);
        return matrix;
    }

    @Transactional
    public CurriculumMatrix update(UUID id, CurriculumMatrix updated) {
        CurriculumMatrix cm = repository.findById(id);
        if (cm == null) return null;

        cm.setCourse(updated.getCourse());
        cm.setDiscipline(updated.getDiscipline());
        cm.setSemester(updated.getSemester());

        return cm;
    }

    @Transactional
    public boolean delete(UUID id) {
        return repository.deleteById(id);
    }
}
