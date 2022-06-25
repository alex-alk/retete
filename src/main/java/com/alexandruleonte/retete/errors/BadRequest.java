package com.alexandruleonte.retete.errors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class BadRequest {
    public ResponseEntity<?> makeResponse(String field, String message) {
        Map<String, String> errorMapUnique = new HashMap<>();
        errorMapUnique.put(field, message);
        return new ResponseEntity<>(errorMapUnique, HttpStatus.BAD_REQUEST);
    }
}
