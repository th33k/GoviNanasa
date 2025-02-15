package com.academy.springacademy.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "User_Table")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "User_NIC", nullable = false)
    private int id;

    @Column(name = "User_first_name" , nullable = false)
    private String f_name;

    @Column(name = "User_last_name" , nullable = false)
    private String l_name;

    @Column(name = "User_district" , nullable = false)
    private String district;

    @Column(name = "crop_type" , nullable = false)
    private String cropType;
    @Column(name = "User_phone_number" , nullable = false)
    private String phone;


}
