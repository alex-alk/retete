package com.alexandruleonte.retete.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

public class LoginController {
	@GetMapping("/login")
	public String index(Model model) {
		return "index";
	}
}
