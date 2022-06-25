package com.alexandruleonte.retete.security;


import com.alexandruleonte.retete.service.UserDetailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private UserDetailServiceImpl userDetailsService;
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
	}

	@Override
	@Bean(BeanIds.AUTHENTICATION_MANAGER)
	protected AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}

	//restrict all routes that start with admin
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.csrf().disable();

		http.exceptionHandling()
				.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED));

		http
			.authorizeRequests().antMatchers(HttpMethod.POST, "/api/login").permitAll()
			.and()
			.authorizeRequests().anyRequest().authenticated();

		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

//		http.addFilterBefore(new LoginFilter("/api/login", authenticationManager()),
//					UsernamePasswordAuthenticationFilter.class)
//			// Filter for other requests to check JWT in header
//			.addFilterBefore(new AuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);

//		http.cors().and().authorizeRequests()
//			.antMatchers("/").permitAll()
//			.antMatchers("/api/login").permitAll()
//			.antMatchers("/api/users").permitAll()
//			.antMatchers(HttpMethod.GET).permitAll()
//			.anyRequest().authenticated()
//			.and()
//			// Filter for the api/login requests
//			.addFilterBefore(new LoginFilter("/api/login", authenticationManager()),
//					UsernamePasswordAuthenticationFilter.class)
//			// Filter for other requests to check JWT in header
//			.addFilterBefore(new AuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
	}
	
//	@Bean
//	CorsConfigurationSource corsConfigurationSource() {
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		CorsConfiguration config = new CorsConfiguration();
//		config.setAllowedOrigins(Arrays.asList("*"));
//		config.setAllowedMethods(Arrays.asList("*"));
//		config.setAllowedHeaders(Arrays.asList("*"));
//		//config.setAllowCredentials(true);
//		config.applyPermitDefaultValues();
//		source.registerCorsConfiguration("/**", config);
//		return source;
//	}
}