package com.unifor.api;

import com.unifor.entity.CurriculumMatrix;
import com.unifor.service.CurriculumMatrixService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.UUID;

@Path("/curriculum-matrix")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CurriculumMatrixResource {

    @Inject
    CurriculumMatrixService service;

    @GET
    @RolesAllowed({"admin", "coordinator", "professor", "student"})
    public List<CurriculumMatrix> getAll() {
        return service.listAll();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public CurriculumMatrix getOne(@PathParam("id") UUID id) {
        return service.findById(id);
    }

    @POST
    @RolesAllowed({"admin", "coordinator"})
    public Response create(CurriculumMatrix matrix) {
        return Response.status(Response.Status.CREATED)
                .entity(service.create(matrix))
                .build();
    }

    @PUT
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public CurriculumMatrix update(@PathParam("id") UUID id, CurriculumMatrix matrix) {
        return service.update(id, matrix);
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public Response delete(@PathParam("id") UUID id) {
        boolean deleted = service.delete(id);
        return deleted ? Response.noContent().build() : Response.status(Response.Status.NOT_FOUND).build();
    }
}
