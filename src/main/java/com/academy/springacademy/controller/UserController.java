package com.academy.springacademy.controller;

import com.academy.springacademy.dto.ResponseDTO;
import com.academy.springacademy.dto.UserDTO;
import com.academy.springacademy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;


    @PostMapping("/save")
    public ResponseDTO saveUser(@RequestBody UserDTO userDTO){
        return userService.saveUser(userDTO);
    }

    @GetMapping("/user/{id}")
    public ResponseDTO getUserById(@PathVariable int id){
        return userService.getUserById(id);
    }

    @GetMapping("/users")
    public ResponseDTO getAllUsers(){
        return userService.getAllUsers();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseDTO deleteUserById(@PathVariable int id){
        return userService.deleteUserById(id);
    }

    @PutMapping("/update/{id}")
    public ResponseDTO updateUserById(@PathVariable int id , @RequestBody UserDTO userDTO){
        return userService.updateUserById(id,userDTO);
    }
}
