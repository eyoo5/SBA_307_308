package com.estheryoo.yoo_esther_sba_307_308.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {
    @GetMapping("/user")
    public String user() {
        return "userView";
    }

    // validating request from form => then it redirects to  /user endpoint.
    @PostMapping("/user")
    public String loginPost(@RequestParam String email, @RequestParam String password, Model model) {
        if(email.equals("eyoo@gmail.com") && password.equals("123")) {
            return "redirect:/user";
        }else{
            model.addAttribute("error","Incorrect email or password");
            return "/login";//return with error page with error message
        }
    }

}
