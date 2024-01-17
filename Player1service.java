package com.example.Player1.service;
import com.example.Player1.model.Player1model;
import com.example.Player1.repository.Player1repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class Player1service {

    @Autowired
    private Player1repository player1repository;

    public List<Player1model> getAllUserLogins() {
        return player1repository.findAll();
    }

    public Player1model getUserLoginByUsername(String username) {
        return player1repository.findByName(username);
    }

    public Player1model adduser(String Name,String Id,String Password) {
        Player1model obj = new Player1model(Name, Password, Id, 1);
        player1repository.save(obj);
        return obj;
    }

    public void deleteUserLogin(String username) {
        player1repository.deleteByName(username);
    }
}

