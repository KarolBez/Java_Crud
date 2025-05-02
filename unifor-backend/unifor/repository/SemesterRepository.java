package com.unifor.repository;

import com.unifor.entity.Semester;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.UUID;

@ApplicationScoped
public class SemesterRepository implements PanacheRepositoryBase<Semester, UUID> {
}
