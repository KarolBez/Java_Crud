package com.unifor.api;

import com.unifor.entity.User;
import com.unifor.service.UserService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.UUID;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    @Inject
    UserService userService;

    @GET
    @RolesAllowed({"admin"})
    public List<User> getAll() {
        return userService.listAll();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"admin"})
    public User getOne(@PathParam("id") UUID id) {
        return userService.findById(id);
    }

    @POST
    @RolesAllowed({"admin"})
    public Response create(User user) {
        return Response.status(Response.Status.CREATED)
                .entity(userService.create(user))
                .build();
    }

    @PUT
    @Path("/{id}")
    @RolesAllowed({"admin"})
    public User update(@PathParam("id") UUID id, User user) {
        return userService.update(id, user);
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed({"admin"})
    public Response delete(@PathParam("id") UUID id) {
        boolean deleted = userService.delete(id);
        return deleted ? Response.noContent().build() : Response.status(Response.Status.NOT_FOUND).build();
    }
}
