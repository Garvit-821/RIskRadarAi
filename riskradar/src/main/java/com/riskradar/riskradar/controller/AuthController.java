package com.riskradar.riskradar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.riskradar.riskradar.entity.User;
import com.riskradar.riskradar.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public Object login(@RequestBody User user) {

        User loggedUser = userService.login(user.getEmail(), user.getPassword());

        if (loggedUser == null) {
            return "Invalid Email or Password";
        }

        return loggedUser;
    }
}