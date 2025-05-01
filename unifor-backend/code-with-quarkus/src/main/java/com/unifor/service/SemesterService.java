package com.unifor.service;

import com.unifor.entity.Semester;
import com.unifor.repository.SemesterRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.UUID;

@ApplicationScoped
public class SemesterService {

    @Inject
    SemesterRepository repository;

    public List<Semester> listAll() {
        return repository.listAll();
    }

    public Semester findById(UUID id) {
        return repository.findById(id);
    }

    @Transactional
    public Semester create(Semester semester) {
        repository.persist(semester);
        return semester;
    }

    @Transactional
    public Semester update(UUID id, Semester updated) {
        Semester s = repository.findById(id);
        if (s == null) return null;

        s.setYear(updated.getYear());
        s.setPeriod(updated.getPeriod());

        return s;
    }

    @Transactional
    public boolean delete(UUID id) {
        return repository.deleteById(id);
    }
}
