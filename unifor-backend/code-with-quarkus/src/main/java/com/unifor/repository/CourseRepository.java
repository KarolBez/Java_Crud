package com.unifor.repository;

import java.util.UUID;

import com.unifor.entity.Course;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CourseRepository implements PanacheRepositoryBase<Course, UUID> {
}