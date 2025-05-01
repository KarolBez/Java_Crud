package com.unifor.service;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

import com.unifor.entity.Discipline;
import com.unifor.repository.DisciplineRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.UUID;

@ApplicationScoped
public class DisciplineService {

    @Inject
    DisciplineRepository repository;

    public List<Discipline> listAll() {
        return repository.listAll();
    }

    public Discipline findById(UUID id) {
        return repository.findById(id);
    }

    @Transactional
    public Discipline create(Discipline discipline) {
        repository.persist(discipline);
        return discipline;
    }

    @Transactional
    public Discipline update(UUID id, Discipline updated) {
        Discipline d = repository.findById(id);
        if (d == null) return null;

        d.setName(updated.getName());
        d.setSemester(updated.getSemester());
        d.setCourse(updated.getCourse());

        return d;
    }

    @Transactional
    public boolean delete(UUID id) {
        return repository.deleteById(id);
    }
}
