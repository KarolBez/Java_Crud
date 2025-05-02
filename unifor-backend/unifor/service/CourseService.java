package com.unifor.service;

import com.unifor.entity.Course;
import com.unifor.repository.CourseRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.UUID;

@ApplicationScoped
public class CourseService {

    @Inject
    CourseRepository courseRepository;

    public List<Course> listAll() {
        return courseRepository.listAll();
    }

    public Course findById(UUID id) {
        return courseRepository.findById(id);
    }

    @Transactional
    public Course create(Course course) {
        courseRepository.persist(course);
        return course;
    }

    @Transactional
    public Course update(UUID id, Course updated) {
        Course course = courseRepository.findById(id);
        if (course == null) return null;

        course.setName(updated.getName());
        return course;
    }

    @Transactional
    public boolean delete(UUID id) {
        return courseRepository.deleteById(id);
    }
}
