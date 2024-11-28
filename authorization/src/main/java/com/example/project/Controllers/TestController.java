package com.example.project.Controllers;


import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class TestController {
    @GetMapping("/welcome")
    public String welcome() {
        return "This is unprotected page";
    }
    @GetMapping("/users")
    @PreAuthorize("hasAnyAuthority('ROLE_USER')")
    public String users() {
        return "This is page only users";
    }
    @GetMapping("/admins")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public String admins() {
        return "This is page only admins";
    }
    @GetMapping("/all")
    public String all() {
        return "This is page for all users";
    }
}
