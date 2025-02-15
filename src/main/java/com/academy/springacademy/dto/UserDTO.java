package com.academy.springacademy.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String name;
    private String f_name;
    private String l_name;
    private String district;
    private String cropType;
    private String phone;
}
