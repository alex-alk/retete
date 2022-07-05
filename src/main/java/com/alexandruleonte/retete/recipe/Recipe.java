package com.alexandruleonte.retete.recipe;

import com.alexandruleonte.retete.category.RecipeCategory;

import javax.persistence.*;

@Entity
@Table(name = "recipes")
public class Recipe {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(length=200)
	private String name;
	
	private String content;
	
	private String description;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private RecipeCategory category;

	
	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public RecipeCategory getCategory() {
		return category;
	}

	public void setCategory(RecipeCategory category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
