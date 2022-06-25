package com.alexandruleonte.retete.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.alexandruleonte.retete.model.Recipe;
import com.alexandruleonte.retete.repository.RecipeRepository;
import com.alexandruleonte.retete.storage.StorageService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class RecipeApiController {
	
	private final StorageService storageService;
	
	@Autowired
	private RecipeRepository repo;
	
	@Autowired
	public RecipeApiController(StorageService storageService) {
		this.storageService = storageService;
	}
	
	@PostMapping(value="/api/recipe/save")
	public String save(@RequestParam(value = "image", required = true) MultipartFile image, 
			@RequestParam(value = "recipe", required = true) String recipe) throws JsonMappingException, JsonProcessingException {
		
		ObjectMapper objectMapper = new ObjectMapper();
		Recipe recipeNew = objectMapper.readValue(recipe, Recipe.class);
		
		Recipe insertedRecipe = repo.save(recipeNew);
		storageService.store(image, insertedRecipe.getId());
		
	    return "ok";
    }
	
	@PatchMapping(value="/api/recipe/update")
	public String update(@RequestParam(value = "image", required = false) MultipartFile image, 
			@RequestParam(value = "recipe", required = true) String recipe) throws JsonMappingException, JsonProcessingException {
		
		ObjectMapper objectMapper = new ObjectMapper();
		Recipe recipeNew = objectMapper.readValue(recipe, Recipe.class);
		
		Recipe insertedRecipe = repo.save(recipeNew);
		if (image != null) storageService.store(image, insertedRecipe.getId());
		
	    return "ok";
    }
	
	@DeleteMapping(value="/api/recipe/{id}")
	public String delete(@PathVariable long id) {
		Optional<Recipe> recipe = repo.findById(id);
		storageService.delete(id);
		repo.delete(recipe.get());
	    return "ok";
    }
}
