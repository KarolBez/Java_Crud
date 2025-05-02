package com.unifor.repository;

import com.unifor.entity.Discipline;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class DisciplineRepository implements PanacheRepository<Discipline> {
}
