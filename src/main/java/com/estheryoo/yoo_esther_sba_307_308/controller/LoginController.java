package com.estheryoo.yoo_esther_sba_307_308.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {
    //Get login page
    @GetMapping(value={"/","/login"})
    public String login() {
        return "login";
    }



}
