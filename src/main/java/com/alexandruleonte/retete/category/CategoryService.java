package com.alexandruleonte.retete.category;

import org.springframework.beans.factory.annotation.Autowired;

public class CategoryService {

    @Autowired
    private RecipeCategoryRepository repo;

    public Iterable<RecipeCategory> findAllCategories() {
        return repo.findAll();
    }
}
