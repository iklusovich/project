package com.example.project.Config;

import com.example.project.Entity.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class DataInitializer {
    @Bean
    public CommandLineRunner initData(MyUserDetailsService userServiceImp) {
        return args -> {
            User user = new User();
            user.setName("user");
            user.setPassword("{noop}123");
            user.setRole("ROLE_USER");
            userServiceImp.add(user);

            User admin = new User();
            admin.setName("admin");
            admin.setRole("ROLE_ADMIN");
            admin.setPassword("{noop}123");
            userServiceImp.add(admin);
        };
    }
}