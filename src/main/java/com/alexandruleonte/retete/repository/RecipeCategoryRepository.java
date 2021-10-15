package com.alexandruleonte.retete.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.alexandruleonte.retete.model.RecipeCategory;

@RepositoryRestResource
public interface RecipeCategoryRepository extends CrudRepository <RecipeCategory, Long> {

}
