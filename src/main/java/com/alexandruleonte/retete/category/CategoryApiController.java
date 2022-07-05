package com.alexandruleonte.retete.category;

import com.alexandruleonte.retete.errors.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CategoryApiController {

	@Autowired
	private RecipeCategoryRepository repo;

	@Autowired
	MapValidationErrorService mapValidationErrorService;

	@GetMapping("/recipeCategories")
	public Iterable<RecipeCategory> getAllCategories() {
		return repo.findAll();
	}

	@PostMapping("/recipeCategories")
	public ResponseEntity<?> store(@Valid @RequestBody RecipeCategory category, BindingResult result) {
		ResponseEntity<?> errorMap = mapValidationErrorService.validate(result);
		if(errorMap != null) return errorMap;

		RecipeCategory categorySaved = repo.save(category);

		return new ResponseEntity<>(categorySaved, HttpStatus.CREATED);
	}

	@PatchMapping("/recipeCategories")
	public ResponseEntity<?> update(@Valid @RequestBody RecipeCategory category, BindingResult result) {
		ResponseEntity<?> errorMap = mapValidationErrorService.validate(result);
		if(errorMap != null) return errorMap;

		RecipeCategory categorySaved = repo.save(category);

		return new ResponseEntity<>(categorySaved, HttpStatus.CREATED);
	}

	@GetMapping("/recipeCategories/{id}")
	public Optional<RecipeCategory> find(@PathVariable long id) {
		return repo.findById(id);
	}

	@DeleteMapping("/recipeCategories/{id}")
	public ResponseEntity<?> delete(@PathVariable long id) {
		RecipeCategory category = repo.getById(id);
		repo.delete(category);
		return new ResponseEntity<>("ok", HttpStatus.OK);
	}
}
