package com.alexandruleonte.retete;

import com.alexandruleonte.retete.user.User;
import static org.assertj.core.api.Assertions.assertThat;

import com.alexandruleonte.retete.user.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserControllerTest {

    public static final String API_PREFIX = "/api/users";

    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    UserRepository userRepository;

    @Test
    public void postUser_whenUserIsValid_receiveCreated() {
        User user = createUser();
        ResponseEntity<User> response = testRestTemplate.postForEntity(API_PREFIX + "/register", user, User.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Test
    public void postUser_whenUserIsValid_userSavedToDatabase() {
        User user = createUser();
        testRestTemplate.postForEntity(API_PREFIX + "/register", user, User.class);
        assertThat(userRepository.count()).isEqualTo(1);
    }

    @Test
    public void postUser_whenUserIsValid_receiveUser() {
        User user = createUser();
        ResponseEntity<User> response = testRestTemplate.postForEntity(API_PREFIX + "/register", user, User.class);

        if (response.getBody() != null) {
            assertThat(response.getBody().getUsername()).isEqualTo(user.getUsername());
        }
        assertThat(response.getBody().getPassword()).isNotNull();
        assertThat(response.getBody().getPassword()).isNotEqualTo(user.getPassword());
    }

    private User createUser() {
        User user = new User();
        user.setUsername("user");
        user.setPassword("password");
        return user;
    }

    @Before
    public void cleanup() {
        userRepository.deleteAll();
    }
}
