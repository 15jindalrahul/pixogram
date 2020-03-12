package com.example.demo.service;

import java.util.Optional;
import com.example.demo.model.Login;
import com.example.demo.model.User;

public interface UserService {
	Login createLogin(Login login);

	User createUser(User user);

	User findByName(String name);

	Login getByUsername(String name);

	/* Login updateUser(User u1, Login l1); */

	Optional<User> findById(int id);

	Optional<Login> findLoginById(int id);

}
