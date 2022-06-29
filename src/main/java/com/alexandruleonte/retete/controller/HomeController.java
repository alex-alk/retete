package com.alexandruleonte.retete.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.alexandruleonte.retete.category.RecipeCategoryRepository;

@Controller
public class HomeController {

	@Autowired
	private RecipeCategoryRepository recipeCategory;
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("recipeCategs", recipeCategory.findAll());
		return "index"; 
	}
	@GetMapping("/admin/**")
	public String adminHome() { 
		return "build/index"; 
	}
}
