package com.unifor.api;

import com.unifor.entity.Course;
import com.unifor.service.CourseService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.UUID;

@Path("/courses")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CourseResource {

    @Inject
    CourseService courseService;

    @GET
    @RolesAllowed({"admin", "coordinator"})
    public List<Course> getAll() {
        return courseService.listAll();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public Course getOne(@PathParam("id") UUID id) {
        return courseService.findById(id);
    }

    @POST
    @RolesAllowed({"admin", "coordinator"})
    public Response create(Course course) {
        return Response.status(Response.Status.CREATED)
                .entity(courseService.create(course))
                .build();
    }

    @PUT
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public Course update(@PathParam("id") UUID id, Course course) {
        return courseService.update(id, course);
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public Response delete(@PathParam("id") UUID id) {
        boolean deleted = courseService.delete(id);
        return deleted ? Response.noContent().build() : Response.status(Response.Status.NOT_FOUND).build();
    }
}
