package com.academy.springacademy.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseDTO {

    private HttpStatus status;
    private String message;
    private Object data; // Can store any type of response data
}
