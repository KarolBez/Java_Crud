package com.unifor.service;

import com.unifor.entity.User;
import com.unifor.repository.UserRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.UUID;

@ApplicationScoped
public class UserService {

    @Inject
    UserRepository userRepository;

    public List<User> listAll() {
        return userRepository.listAll();
    }

    public User findById(UUID id) {
        return userRepository.findById(id);
    }

    @Transactional
    public User create(User user) {
        userRepository.persist(user);
        return user;
    }

    @Transactional
    public User update(UUID id, User updated) {
        User user = userRepository.findById(id);
        if (user == null) return null;

        user.setName(updated.getName());
        user.setEmail(updated.getEmail());
        user.setRole(updated.getRole());

        return user;
    }

    @Transactional
    public boolean delete(UUID id) {
        return userRepository.deleteById(id);
    }
}
