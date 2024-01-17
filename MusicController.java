package com.example.Player1.spotifyapi;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api")
public class MusicController {

    @PostMapping("/{songName}")
    @CrossOrigin(origins = "http://localhost:3000")
    public String getSongDetails(@PathVariable String songName) {
        System.out.println(songName);

        // Pass the song name to Flask server
        String flaskServerUrl = "http://localhost:5000/";
        String endpoint = "searchsong/{songName}";
        // Build the URL with path variable using UriComponentsBuilder
        String url = UriComponentsBuilder.fromHttpUrl(flaskServerUrl + endpoint)
                .buildAndExpand(songName)
                .toUriString();
        System.out.println("url="+url);
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.postForObject(url, null, String.class);
        System.out.println("result is " + result);
        return result;
    }
}


