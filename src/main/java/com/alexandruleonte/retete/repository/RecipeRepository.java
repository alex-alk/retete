package com.alexandruleonte.retete.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.alexandruleonte.retete.model.Recipe;

@RepositoryRestResource
public interface RecipeRepository extends CrudRepository <Recipe, Long> { // or PagingAndSortingRepository
	List<Recipe> findByName(@Param("name") String name);// can be: findByNameAndContentOrderByIdDesc
	// or
	// @Query("select r from Reteta r where r.name = ?1")
	// List<Reteta> findByName(String name);
	// another example: @Query("select c from Car c where c.brand like %?1")
}
