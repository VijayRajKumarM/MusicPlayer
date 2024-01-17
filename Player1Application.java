package com.example.Player1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.MongoTemplate;
@SpringBootApplication
public class Player1Application implements CommandLineRunner {
	@Autowired
	private MongoTemplate mongoTemplate;

	public static void main(String[] args) {
		SpringApplication.run(Player1Application.class, args);
		System.out.println("HELLO WORLD");
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("................." + mongoTemplate.getCollectionNames());
	}
}

