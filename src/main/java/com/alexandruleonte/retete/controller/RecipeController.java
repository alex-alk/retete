package com.alexandruleonte.retete.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.Optional;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.alexandruleonte.retete.ReteteApplication;
import com.alexandruleonte.retete.model.Recipe;
import com.alexandruleonte.retete.model.RecipeCategory;
import com.alexandruleonte.retete.repository.RecipeRepository;
import com.alexandruleonte.retete.service.StorageService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class RecipeController {
	
	private static final Logger logger =
			LoggerFactory.getLogger(ReteteApplication.class);
	private final StorageService storageService;
	
	@Autowired
	private RecipeRepository repo;
	
	@Autowired
	public RecipeController(StorageService storageService) {
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
