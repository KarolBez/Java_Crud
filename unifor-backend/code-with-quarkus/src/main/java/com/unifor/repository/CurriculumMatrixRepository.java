package com.unifor.repository;

import com.unifor.entity.CurriculumMatrix;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.UUID;

@ApplicationScoped
public class CurriculumMatrixRepository implements PanacheRepositoryBase<CurriculumMatrix, UUID> {
}
