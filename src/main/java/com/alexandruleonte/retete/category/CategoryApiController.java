package com.alexandruleonte.retete.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CategoryApiController {

	@Autowired
	private RecipeCategoryRepository repo;

	@GetMapping("/recipeCategories")
	public Iterable<RecipeCategory> getAllCategories() {
		return repo.findAll();
	}

	
//	@PostMapping(value="/api/recipe/save")
//	public String save(@RequestParam(value = "image", required = true) MultipartFile image,
//			@RequestParam(value = "recipe", required = true) String recipe) throws JsonMappingException, JsonProcessingException {
//
//		ObjectMapper objectMapper = new ObjectMapper();
//		Recipe recipeNew = objectMapper.readValue(recipe, Recipe.class);
//
//		Recipe insertedRecipe = repo.save(recipeNew);
//
//	    return "ok";
//    }
	
//	@PatchMapping(value="/api/recipe/update")
//	public String update(@RequestParam(value = "image", required = false) MultipartFile image,
//			@RequestParam(value = "recipe", required = true) String recipe) throws JsonMappingException, JsonProcessingException {
//
//		ObjectMapper objectMapper = new ObjectMapper();
//		Recipe recipeNew = objectMapper.readValue(recipe, Recipe.class);
//
//		Recipe insertedRecipe = repo.save(recipeNew);
//		if (image != null) storageService.store(image, insertedRecipe.getId());
//
//	    return "ok";
//    }
	
//	@DeleteMapping(value="/api/recipe/{id}")
//	public String delete(@PathVariable long id) {
//		Optional<Recipe> recipe = repo.findById(id);
//		storageService.delete(id);
//		repo.delete(recipe.get());
//	    return "ok";
//    }
}
