package com.alexandruleonte.retete.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.alexandruleonte.retete.ReteteApplication;
import com.alexandruleonte.retete.model.Recipe;
import com.alexandruleonte.retete.model.RecipeCategory;
import com.alexandruleonte.retete.repository.RecipeRepository;

@RestController
public class RecipeController {
	/*
	private static final Logger logger =
			LoggerFactory.getLogger(ReteteApplication.class);
	
	@PostMapping(value="/api/recipe/saveImage", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String newCategory(@RequestParam(value = "image", required = true) MultipartFile image) {
		logger.info("*************************************************");
		
		
		logger.info(image.getName());
	    return "ok";
    }*/
}
