package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Login;
@Repository
public interface LoginRepository extends CrudRepository<Login, Integer> {
	
	public Login getByUsername(String username);
	public Login findByUsernameAndPassword(String username, String password);

}
