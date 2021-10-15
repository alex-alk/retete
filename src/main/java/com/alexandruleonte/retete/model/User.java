package com.alexandruleonte.retete.model;

import java.util.List;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {
	
	public static final String ADMIN = "admin";
	public static final String USER = "user";
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	public long getId() {
		return id;
	}

	@Column(length=200)
	private String username;

	private String password;
	
	private String role;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="user")
	@JsonIgnore
	private List<Recipe> recipes;
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}
