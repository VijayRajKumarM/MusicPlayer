package com.example.Player1.repository;
import com.example.Player1.model.Player1model;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface Player1repository extends MongoRepository<Player1model,String>{
    Player1model findByName(String name);
    Player1model deleteByName(String name);

}
