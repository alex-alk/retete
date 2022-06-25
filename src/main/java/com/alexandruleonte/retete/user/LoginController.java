package com.alexandruleonte.retete.user;

import com.alexandruleonte.retete.payload.AccountCredentials;
import com.alexandruleonte.retete.payload.JWTLoginSuccessResponse;
import com.alexandruleonte.retete.security.JwtTokenProvider;
import com.alexandruleonte.retete.service.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import static com.alexandruleonte.retete.security.SecurityConstants.TOKEN_PREFIX;

@RestController
@RequestMapping("/api")
public class LoginController {

	@Autowired
	MapValidationErrorService mapValidationErrorService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenProvider tokenProvider;

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody AccountCredentials accountCredentials,
											  BindingResult bindingResult) {
		ResponseEntity<?> errorMap = mapValidationErrorService.validate(bindingResult);
		if(errorMap != null) return errorMap;
		System.out.println(accountCredentials.getPassword() + " " + accountCredentials.getUsername());
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						accountCredentials.getUsername(),
						accountCredentials.getPassword()
				)
		);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = TOKEN_PREFIX + tokenProvider.generateToken(authentication);
		return ResponseEntity.ok(new JWTLoginSuccessResponse(true, jwt));
	}
}
