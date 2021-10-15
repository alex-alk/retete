package com.alexandruleonte.retete;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.alexandruleonte.retete.controller.RecipeController;

@SpringBootTest
class ReteteApplicationTests {

	@Autowired
	private RecipeController recipeController;
	
	@Test
	void contextLoads() {
		assertThat(recipeController).isNotNull();
	}

}
