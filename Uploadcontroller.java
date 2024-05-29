package com.example.Player1.controller3;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.http.*;
import org.springframework.http.ResponseEntity;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;


@RestController
@RequestMapping("/audio")
@CrossOrigin(origins = "http://localhost:3000")
public class Uploadcontroller {
    @Autowired
    private GridFsOperations operations;

    @PostMapping("/upload")
    public String handleFileUpload(@RequestParam("file") MultipartFile file) {
        try {
            // Store file in GridFS
            operations.store(file.getInputStream(), file.getOriginalFilename());

            return "File uploaded successfully!";
        } catch (Exception e) {
            return "Failed to upload file: " + e.getMessage();
        }
    }
    public static byte[] toByteArray(InputStream inputStream) throws IOException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        byte[] buffer = new byte[16384]; // Adjust buffer size as needed

        int length;
        while ((length = inputStream.read(buffer)) != -1) {
            outputStream.write(buffer, 0, length);
        }

        return outputStream.toByteArray();
    }
    @GetMapping("/{filename}")
    public ResponseEntity<byte[]> getSpecificAudioFileFromGridFs(@PathVariable String filename) {
        try {
            GridFsResource resource = operations.getResource(filename);
            byte[] audioBytes = toByteArray(resource.getInputStream());
            // You may need to adjust the response headers and status code based on your requirements
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentLength(audioBytes.length);
            headers.setContentDispositionFormData("filename", filename);
            return new ResponseEntity<>(audioBytes, headers, HttpStatus.OK);
        }  catch (Exception e) {
            // Handle other exceptions
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}







