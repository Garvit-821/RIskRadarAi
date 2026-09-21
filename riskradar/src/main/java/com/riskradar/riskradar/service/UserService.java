package com.riskradar.riskradar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.riskradar.riskradar.entity.User;
import com.riskradar.riskradar.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String register(User user) {

        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email Already Exists";
        }

        userRepository.save(user);

        return "Registration Successful";
    }

    public User login(String email, String password) {

        return userRepository.findByEmail(email)
                .filter(user -> user.getPassword().equals(password))
                .orElse(null);
    }
}