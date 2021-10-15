package com.alexandruleonte.retete;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.alexandruleonte.retete.model.Recipe;
import com.alexandruleonte.retete.model.RecipeCategory;
import com.alexandruleonte.retete.model.User;
import com.alexandruleonte.retete.repository.RecipeCategoryRepository;
import com.alexandruleonte.retete.repository.RecipeRepository;
import com.alexandruleonte.retete.repository.UserRepository;

@SpringBootApplication
public class ReteteApplication {

	@Autowired
	private RecipeRepository repository;
	
	@Autowired
	private UserRepository urepository;
	
	@Autowired
	private RecipeCategoryRepository categRepo;
	
	private static final Logger logger =
			LoggerFactory.getLogger(ReteteApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(ReteteApplication.class, args);
		logger.info("loaded");
	}
	
	@Bean
	CommandLineRunner runner(){
		User user = new User();
		user.setUsername("user");
		user.setPassword("$2a$04$1.YhMIgNX/8TkCKGFUONWO1waedKhQ5KrnB30fl0Q01QKqmzLf.Zi");
		user.setRole(User.USER);
		
		User user2 = new User();
		user2.setUsername("admin");
		user2.setPassword("$2a$04$KNLUwOWHVQZVpXyMBNc7JOzbLiBjb9Tk9bP7KNcPI12ICuvzXQQKG");
		user2.setRole(User.ADMIN);
		
		urepository.save(user);
		urepository.save(user2);
		
		RecipeCategory categ = new RecipeCategory();
		categ.setName("Bauturi");
		categRepo.save(categ);
		
		
		Recipe r = new Recipe();
		r.setContent("contentawdwa");
		r.setName("user recipe");
		r.setPhotoSrc("fotosrcasdas");
		r.setUser(user);
		r.setCategory(categ);
		
		Recipe r2 = new Recipe();
		r2.setContent("aawdwad");
		r2.setName("admin recipe");
		r2.setPhotoSrc("fotosrcasdas");
		r2.setUser(user2);
		r2.setCategory(categ);
		logger.info("data inserted");
		
		return args -> {
			repository.save(r);
			repository.save(r2);
		};
	}
	
}
