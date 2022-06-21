package com.alexandruleonte.retete.user;

import com.alexandruleonte.retete.service.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @PostMapping("/register")
    public ResponseEntity<?> createUser(@Valid @RequestBody User user, BindingResult result) {
        //userValidator.validate(user, result);
        ResponseEntity<?> errorMap = mapValidationErrorService.validate(result);
        if(errorMap != null) return errorMap;

        User newUser = userService.save(user);

        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}
