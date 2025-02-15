package com.academy.springacademy.service.impl;

import com.academy.springacademy.dto.ResponseDTO;
import com.academy.springacademy.dto.UserDTO;
import com.academy.springacademy.entity.User;
import com.academy.springacademy.repo.UserRepo;
import com.academy.springacademy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public ResponseDTO saveUser(UserDTO userDTO) {

        try {

            User user = new User();

            user.setF_name(userDTO.getF_name());
            user.setL_name(userDTO.getL_name());
            user.setDistrict(userDTO.getDistrict());
            user.setCropType(userDTO.getCropType());
            user.setPhone(userDTO.getPhone());

            userRepo.save(user);

            return ResponseDTO.builder().message("User Created Successfully").status(HttpStatus.CREATED).data(user).build();


        } catch (Exception e) {

            return ResponseDTO.builder().message("ERROR User Not Created").status(HttpStatus.BAD_REQUEST).data(null).build();

        }

    }

    @Override
    public ResponseDTO getUserById(int id) {
        Optional<User> user = userRepo.findById(id);

        if (user.isPresent()) {
            return ResponseDTO.builder().message("User Found").status(HttpStatus.OK).data(user.get()).build();
        } else {
            return ResponseDTO.builder().message("User Not Found").status(HttpStatus.NOT_FOUND).data(null).build();
        }
    }

    @Override
    public ResponseDTO getAllUsers() {
        List<User> users = userRepo.findAll();

        if (!users.isEmpty()) {
            return ResponseDTO.builder().message("Users Retrieved Successfully").status(HttpStatus.OK).data(users).build();
        } else {
            return ResponseDTO.builder().message("Users Are Not Found").status(HttpStatus.NOT_FOUND).data(null).build();
        }
    }

    @Override
    public ResponseDTO deleteUserById(int id) {
        Optional<User> user = userRepo.findById(id);
        if (user.isPresent()) {
            userRepo.deleteById(id);
            return ResponseDTO.builder().message("User Deleted Successfully").status(HttpStatus.OK).data(null).build();
        } else {
            return ResponseDTO.builder().message("User Not Found").status(HttpStatus.NOT_FOUND).data(null).build();
        }
    }

    @Override
    public ResponseDTO updateUserById(int id, UserDTO userDTO) {
        Optional<User> existUser = userRepo.findById(id);

        if (existUser.isPresent()) {
            User user = existUser.get();
            user.setF_name(userDTO.getF_name());
            user.setL_name(userDTO.getL_name());
            user.setDistrict(userDTO.getDistrict());
            user.setCropType(userDTO.getCropType());
            user.setPhone(userDTO.getPhone());

            userRepo.save(user);

            return ResponseDTO.builder().message("User Updated Successfully").status(HttpStatus.OK).data(user).build();

        } else {
            return ResponseDTO.builder().message("User Not Found").status(HttpStatus.NOT_FOUND).data(null).build();
        }
    }
}
