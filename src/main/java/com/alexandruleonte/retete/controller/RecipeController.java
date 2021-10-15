package com.alexandruleonte.retete.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alexandruleonte.retete.model.Recipe;
import com.alexandruleonte.retete.repository.RecipeRepository;

@RestController
public class RecipeController {
	@Autowired
	private RecipeRepository recipeRepository;
	
	@RequestMapping("/retete")
	public Iterable<Recipe> getRecipes() {
		return recipeRepository.findAll();
	}
}
