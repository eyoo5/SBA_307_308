package com.estheryoo.yoo_esther_sba_307_308.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AnimalsController {
    @GetMapping("/dogs")
    public String dogs() {
        return "dogs";
    }

    @GetMapping("/cats")
    public String cats() {
        return "cats";
    }

    @PostMapping("/animals")
    public String generatePictures(@RequestParam("randomPictures") String category) {
        if (category.equals("dogs")) {
            // Redirect to the dogs page
            return "redirect:/dogs";
        } else if (category.equals("cats")) {
            // Redirect to the cats page
            return "redirect:/cats";
        } else {
            // Handle invalid selection (though "required" attribute should prevent this)
            return "redirect:/user"; // Redirect to the homepage or handle as needed
        }
    }
}
