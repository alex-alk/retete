package com.alexandruleonte.retete.repository;

import org.springframework.data.repository.CrudRepository;

import com.alexandruleonte.retete.model.User;

public interface UserRepository extends CrudRepository <User, Long> {
	User findByUsername(String username);
}
