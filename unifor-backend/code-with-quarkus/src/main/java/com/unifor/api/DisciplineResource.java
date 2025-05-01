package com.unifor.api;

import com.unifor.entity.Discipline;
import com.unifor.service.DisciplineService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.UUID;

@Path("/disciplines")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class DisciplineResource {

    @Inject
    DisciplineService service;

    @GET
    @RolesAllowed({"admin", "coordinator"})
    public List<Discipline> getAll() {
        return service.listAll();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public Discipline getOne(@PathParam("id") UUID id) {
        return service.findById(id);
    }

    @POST
    @RolesAllowed({"admin", "coordinator"})
    public Response create(Discipline discipline) {
        return Response.status(Response.Status.CREATED)
                .entity(service.create(discipline))
                .build();
    }

    @PUT
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public Discipline update(@PathParam("id") UUID id, Discipline discipline) {
        return service.update(id, discipline);
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator"})
    public Response delete(@PathParam("id") UUID id) {
        boolean deleted = service.delete(id);
        return deleted ? Response.noContent().build() : Response.status(Response.Status.NOT_FOUND).build();
    }
}
