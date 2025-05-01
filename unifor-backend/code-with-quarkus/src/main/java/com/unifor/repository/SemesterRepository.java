package com.unifor.repository;

import java.util.UUID;

import com.unifor.entity.Discipline;
import com.unifor.entity.Semester;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class SemesterRepository implements PanacheRepositoryBase<Semester, UUID> {
}