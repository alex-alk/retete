package com.alexandruleonte.retete;

import com.alexandruleonte.retete.security.AccountCredentials;
import com.alexandruleonte.retete.user.User;
import com.alexandruleonte.retete.user.UserRepository;
import com.alexandruleonte.retete.user.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class LoginControllerTest {
    public static final String API_LOGIN = "/api/login";

    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Before
    public void cleanup() {
        userRepository.deleteAll();
        testRestTemplate.getRestTemplate().getInterceptors().clear();
    }

    @Test
    public void postLogin_withoutUserCredentials_receiveUnauthorized() {
        User user = createValidUser();
        AccountCredentials ac = createCredentials(user.getUsername(), "password");
        ResponseEntity<Object> response = postLogin(Object.class, ac);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
    }

    @Test
    public void postLogin_withIncorrectUserCredentials_receiveUnauthorized() {
        User user = createValidUser();
        AccountCredentials ac = createCredentials(user.getUsername(), "password");
        ResponseEntity<Object> response = postLogin(Object.class, ac);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
    }

    @Test
    public void postLogin_withValidCredentials_receiveOk() {
        User user = createValidUser();
        userService.save(user);
        AccountCredentials ac = createCredentials(user.getUsername(), "password");
        ResponseEntity<Object> response = postLogin(Object.class, ac);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }


    private <T>ResponseEntity<T> postLogin(Class<T> responseType, AccountCredentials ac) {
        return testRestTemplate.postForEntity(API_LOGIN, ac, responseType);
    }

    private User createValidUser() {
        User user = new User();
        user.setUsername("user@user.com");
        user.setDisplayName("user");
        user.setPassword("password");
        return user;
    }

    private AccountCredentials createCredentials(String username, String password) {
        AccountCredentials ac = new AccountCredentials();
        ac.setUsername(username);
        ac.setPassword(password);
        return ac;
    }
}
