package com.alexandruleonte.retete.model;

import javax.persistence.*;
import org.springframework.data.rest.core.annotation.RestResource;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "recipes")
public class Recipe {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(length=200)
	private String name;
	private String content;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@RestResource(exported = false)
	private RecipeCategory category;
	
	public long getId() {
		return id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	private User user;

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
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public RecipeCategory getCategory() {
		return category;
	}

	public void setCategory(RecipeCategory category) {
		this.category = category;
	}
}
