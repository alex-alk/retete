package com.alexandruleonte.retete.user;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository <User, Long> {
	User findByUsername(String username);
	User getById(Long id);
}
