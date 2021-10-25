package com.alexandruleonte.retete;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.alexandruleonte.retete.model.Recipe;
import com.alexandruleonte.retete.model.User;
import com.alexandruleonte.retete.repository.RecipeRepository;

@DataJpaTest
@RunWith(SpringRunner.class)
public class RecipeRepositoryTest {
	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	private RecipeRepository repository;
	
	@Test
	public void saveRecipe() {
		User user = new User();
		user.setUsername("user");
		user.setPassword("$2a$04$1.YhMIgNX/8TkCKGFUONWO1waedKhQ5KrnB30fl0Q01QKqmzLf.Zi");
		user.setRole(User.USER);
		entityManager.persistAndFlush(user);
		
		Recipe r = new Recipe();
		r.setContent("contentawdwa");
		r.setName("user recipe");
		r.setUser(user);
		
		entityManager.persistAndFlush(r);
		assertThat(r.getId()).isNotNull();
	}
	
	@Test
	public void deleteRecipes() {
		
		User user = new User();
		user.setUsername("user");
		user.setPassword("$2a$04$1.YhMIgNX/8TkCKGFUONWO1waedKhQ5KrnB30fl0Q01QKqmzLf.Zi");
		user.setRole(User.USER);
		entityManager.persistAndFlush(user);
		
		Recipe r = new Recipe();
		r.setContent("contentawdwa");
		r.setName("user recipe");
		r.setUser(user);
		
		Recipe r2 = new Recipe();
		r2.setContent("contentawdwa");
		r2.setName("user recipe");
		r2.setUser(user);
		
		entityManager.persistAndFlush(r);
		
		entityManager.persistAndFlush(r2);
		repository.deleteAll();
		assertThat(repository.findAll()).isEmpty();
	}
}
