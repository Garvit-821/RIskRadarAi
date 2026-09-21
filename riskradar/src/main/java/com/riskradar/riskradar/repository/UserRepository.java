package com.riskradar.riskradar.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.riskradar.riskradar.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

}
