package com.alexandruleonte.retete.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.alexandruleonte.retete.repository.RecipeRepository;

@Controller
public class RecipeController {
	
	@Autowired
	private RecipeRepository repo;
	
	
	@GetMapping(value="/reteta/{id}")
	public String index(@PathVariable long id, Model model) {
		model.addAttribute("recipe", repo.findById(id).get());
		return "recipe"; 
	}
}
