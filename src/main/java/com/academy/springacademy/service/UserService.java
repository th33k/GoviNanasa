package com.academy.springacademy.service;

import com.academy.springacademy.dto.ResponseDTO;
import com.academy.springacademy.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

public interface UserService {
    public ResponseDTO saveUser(UserDTO userDTO);

    public ResponseDTO getUserById(int id);

    public ResponseDTO getAllUsers();

    public ResponseDTO deleteUserById(int id);

    public ResponseDTO updateUserById(int id , UserDTO userDTO );

}
