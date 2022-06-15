package com.alexandruleonte.retete.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody User user, BindingResult result) {
        //userValidator.validate(user, result);
        //ResponseEntity<?> errorMap = mapValidationErrorService.validate(result);
        //if(errorMap != null) return errorMap;

        User newUser = userService.save(user);

        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}
