package com.example.Player1.controller;
import com.example.Player1.model.Player1model;
import com.example.Player1.service.Player1service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/Player1model")
@CrossOrigin(origins = "http://localhost:3000")
public class Player1controller {
    @Autowired
    private Player1service userLoginService;
    @GetMapping
    public List<Player1model> getAllUserLogins() {
        return userLoginService.getAllUserLogins();
    }

    @GetMapping("/{username}")
    public Player1model getUserLoginByUsername(@PathVariable String username) {
        return userLoginService.getUserLoginByUsername(username);
    }

    @PostMapping("/c")
    public Player1model saveUserLogin(@RequestBody Player1model userLogin) {
        Player1model createduser = userLoginService.adduser(userLogin.getName(),userLogin.getId(),
                userLogin.getPassword());
        return createduser;
    }

    @DeleteMapping("/d/{username}")
    public void deleteUserLogin(@PathVariable String username) {
        userLoginService.deleteUserLogin(username);
    }

}

