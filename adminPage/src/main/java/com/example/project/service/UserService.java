package com.example.project.service;

import com.example.project.entity.User;

import java.util.List;

public interface UserService {
    public List<User> findAll();
    public void addUser(User user);
    public void updateUser(User user);
    public void deleteUser(Long id);
    public User getUserById(Long id);
    public User getUserByUsername(String username);
    public User getUserByEmail(String email);
    public User getUserByPhone(String phone);
}
