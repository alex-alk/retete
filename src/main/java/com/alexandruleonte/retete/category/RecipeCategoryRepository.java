package com.alexandruleonte.retete.category;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RecipeCategoryRepository extends CrudRepository <RecipeCategory, Long> {
}
