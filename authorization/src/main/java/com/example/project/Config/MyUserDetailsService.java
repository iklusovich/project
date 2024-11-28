package com.example.project.Config;

import com.example.project.Entity.User;
import com.example.project.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepo.findByName(username);
        return user.map(MyUserDetails::new).orElseThrow(() -> new UsernameNotFoundException(username + "not found"));
    }

    @Transactional
    public void add(User user) {
        userRepo.save(user);
    }

}
