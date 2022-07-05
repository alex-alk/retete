package com.alexandruleonte.retete.category;

import com.alexandruleonte.retete.recipe.Recipe;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.util.List;
// TODO: add validators
@Entity
@Table(name = "recipe_categories")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class RecipeCategory {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(length=100)
	private String name;

	@Column(length=30)
	private String color;
	
	public long getId() {
		return id;
	}

	@OneToMany(cascade = CascadeType.ALL, mappedBy="category")
	@RestResource(exported = false)
	@JsonIgnore
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
	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
}
