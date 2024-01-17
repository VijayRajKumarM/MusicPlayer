package com.example.Player1.repository2;
import com.example.Player1.entry.PlaylistEntry;
import com.example.Player1.model2.Player2model;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;
import com.example.Player1.entry.PlaylistEntry;
public interface Player2repository extends MongoRepository<Player2model, String> {
    Optional<Player2model> findByName(String id);
    //Optional <Player2model> findByalbum(String id);
    //Player2model findByName(String id);
}

