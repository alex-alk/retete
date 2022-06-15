package com.alexandruleonte.retete.user;

import org.springframework.data.repository.CrudRepository;

import com.alexandruleonte.retete.user.User;

public interface UserRepository extends CrudRepository <User, Long> {
	User findByUsername(String username);
}
