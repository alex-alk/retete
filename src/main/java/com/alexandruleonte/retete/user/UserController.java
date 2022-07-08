package com.alexandruleonte.retete.user;

import com.alexandruleonte.retete.errors.BadRequest;
import com.alexandruleonte.retete.errors.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @PostMapping("/users")
    public ResponseEntity<?> createUser(@Valid @RequestBody User user, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.validate(result);
        if(errorMap != null) return errorMap;

        if (userRepository.findByUsername(user.getUsername()) != null) {
            return new BadRequest().makeResponse("username", "Username already exists");
        }

        User newUser = userService.save(user);

        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}
