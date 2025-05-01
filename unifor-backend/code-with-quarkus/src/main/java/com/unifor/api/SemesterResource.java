package com.unifor.api;

import com.unifor.entity.Semester;
import com.unifor.service.SemesterService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.UUID;

@Path("/semesters")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SemesterResource {

    @Inject
    SemesterService service;

    @GET
    @RolesAllowed({"admin", "coordinator"})
    public List<Semester> getAll() {
        return service.listAll();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public Semester getOne(@PathParam("id") UUID id) {
        return service.findById(id);
    }

    @POST
    @RolesAllowed({"admin", "coordinator"})
    public Response create(Semester semester) {
        return Response.status(Response.Status.CREATED)
                .entity(service.create(semester))
                .build();
    }

    @PUT
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public Semester update(@PathParam("id") UUID id, Semester semester) {
        return service.update(id, semester);
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public Response delete(@PathParam("id") UUID id) {
        boolean deleted = service.delete(id);
        return deleted ? Response.noContent().build() : Response.status(Response.Status.NOT_FOUND).build();
    }
}
