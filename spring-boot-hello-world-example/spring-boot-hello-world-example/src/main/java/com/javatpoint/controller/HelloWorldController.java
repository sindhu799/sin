package com.javatpoint.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
@RestController
public class HelloWorldController 
{

@CrossOrigin(origins = {"http://localhost:3000"})
@GetMapping("/time")
public String sayHello() {
    return "Hello, the time at the server is now "  + new Date() + "\n";
}

}
