package com.example.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class AdminPageApplication {
	public static void main(String[] args) {
		SpringApplication.run(AdminPageApplication.class, args);
	}
}
