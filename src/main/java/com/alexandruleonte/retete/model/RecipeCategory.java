package com.alexandruleonte.retete.model;

import java.util.List;

import javax.persistence.*;

import org.springframework.data.rest.core.annotation.RestResource;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "recipe_categories")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class RecipeCategory {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(length=100)
	private String name;
	
	public long getId() {
		return id;
	}

	@OneToMany(cascade = CascadeType.ALL, mappedBy="category")
	@RestResource(exported = false)
	private List<Recipe> recipes;

	public List<Recipe> getRecipes() {
		return recipes;
	}

	public void setRecipes(List<Recipe> recipes) {
		this.recipes = recipes;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
