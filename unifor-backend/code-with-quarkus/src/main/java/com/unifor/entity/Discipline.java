package com.unifor.entity;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "disciplines")
public class Discipline {

    @Id
    @GeneratedValue
    private UUID id;

    private String name;

    private int semester; 

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
