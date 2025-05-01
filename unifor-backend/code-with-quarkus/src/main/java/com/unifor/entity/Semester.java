package com.unifor.entity;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "semesters")
public class Semester {

    @Id
    @GeneratedValue
    private UUID id;

    private int year;

    private int period; 

    
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getPeriod() {
        return period;
    }

    public void setPeriod(int period) {
        this.period = period;
    }
}
