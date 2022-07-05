package com.alexandruleonte.retete.recipe;

import com.alexandruleonte.retete.errors.MapValidationErrorService;
import com.alexandruleonte.retete.storage.StorageService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class RecipeApiController {

	@Autowired
	StorageService storageService;
	
	@Autowired
	private RecipeRepository repo;

	@Autowired
	MapValidationErrorService mapValidationErrorService;

	@GetMapping("/recipes")
	public Iterable<Recipe> findAll() {
		return repo.findAll();
	}

	@GetMapping("/recipes/{id}")
	public Optional<Recipe> find(@PathVariable long id) {
		return repo.findById(id);
	}
	
	@PostMapping("/recipes")
	public ResponseEntity<?> save(@RequestParam(value = "image", required = true) MultipartFile image,
					   @RequestParam(value = "recipe", required = true) String recipe) throws JsonProcessingException {

		ObjectMapper objectMapper = new ObjectMapper();
		Recipe recipeNew = objectMapper.readValue(recipe, Recipe.class);
		
		Recipe insertedRecipe = repo.save(recipeNew);
		storageService.store(image, insertedRecipe.getId());
		
	    return new ResponseEntity<Recipe>(HttpStatus.CREATED);
    }
	
	@PatchMapping("recipes")
	public String update(@RequestParam(value = "image", required = false) MultipartFile image, 
			@RequestParam(value = "recipe", required = true) String recipe) throws JsonProcessingException {
		
		ObjectMapper objectMapper = new ObjectMapper();
		Recipe recipeNew = objectMapper.readValue(recipe, Recipe.class);
		
		Recipe insertedRecipe = repo.save(recipeNew);
		if (image != null) storageService.store(image, insertedRecipe.getId());
		
	    return "ok";
    }
	
	@DeleteMapping("/recipes/{id}")
	public String delete(@PathVariable long id) {
		Recipe recipe = repo.getById(id);
		storageService.delete(id);
		repo.delete(recipe);
	    return "ok";
    }
}
