package com.unifor.repository;

import com.unifor.entity.Discipline;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.UUID;

@ApplicationScoped
public class DisciplineRepository implements PanacheRepositoryBase<Discipline, UUID> {
}